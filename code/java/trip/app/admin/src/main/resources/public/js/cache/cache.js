var app = new Vue({
  el: '#cache',
  data: {
    items: {},
    name: "",
    editor: null,
    currentKey: ""
  },
  created: function(){
    // create the editor
    var options = {
        modes: ['text', 'tree']
    };

    this.editor = new JSONEditor($("#value").get(0), options);

    var self = this;

    $('#myModal').on('show.bs.modal', function (e) {
      var a = $(e.relatedTarget);
      self.currentKey = a.closest("tr").find("td:first-child").text();
    });

    $('#myModal').on('hide.bs.modal', function (e) {
      self.items[self.currentKey] = self.editor.get();
    });

    this.name = $("h1").data("name");

    this.$http.get("/webApi/cache/" + this.name)
            .then((response) => {
                var items = {};

                _.forEach(response.data, function(item){
                    items[item] = "";
                });

                this.items = items;
            })
            .catch(function(response) {
                console.log(response);
            });
  },
  methods: {
    showValue: function(key){
        if(!this.items[key]){
            this.$http.post("/webApi/cache/" + this.name, key)
                    .then((response) => {
                        this.items[key] = response.data;
                        this.editor.set(this.items[key]);
                    })
                    .catch(function(response) {
                        console.log(response);
                    });
        }
        else{
            this.editor.set(this.items[key]);
        }
    },
    update: function(key){
        var self = this;
        bootbox.confirm("Are you sure to update this cache?", function (result) {
            if (result) {
                if (result) {
                    var data = {
                        key: key,
                        value: JSON.stringify(self.items[key])
                    };
                    self.$http.post("/webApi/cache/update/" + self.name, data)
                         .then((response) => {
                            bootbox.alert("Success!");
                         })
                         .catch(function(response) {
                             console.log(response);
                         });
                }
            }
        });
    },
    refresh: function(key){
        this.$http.post("/webApi/cache/" + this.name, key)
                .then((response) => {
                    this.items[key] = response.data;
                    bootbox.alert("Success!");
                })
                .catch(function(response) {
                    console.log(response);
                });
    },
    remove: function(key){
        var self = this;
        bootbox.confirm("Are you sure to remove this cache?", function (result) {
            if (result) {
                if (result) {
                    self.$http.post("/webApi/cache/evict/" + self.name, key)
                         .then((response) => {
                            bootbox.alert("Success!");
                         })
                         .catch(function(response) {
                             console.log(response);
                         });
                }
            }
        });
    },
    removeAll: function(){
        var self = this;
        bootbox.confirm("Are you sure to remove all caches?", function (result) {
            if (result) {
                self.$http.delete("/webApi/cache/" + self.name)
                     .then((response) => {
                        bootbox.alert("Success!");
                     })
                     .catch(function(response) {
                         console.log(response);
                     });
            }
        });
    }
  }
});