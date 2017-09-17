var app = new Vue({
  el: '#feature',
  data: {
    items: {
    }
  },
  created: function(){
    this.$http.get("/api/feature")
            .then((response) => {
                var items = {};
                _.forEach(response.data, function(item){
                    items[item.name] = {
                        name: item.name,
                        date: item.date,
                        description: item.description,
                        isActive: item.isActive
                    };
                });

                this.items = items;
            })
            .catch(function(response) {
                console.log(response)
            });
  },
  methods: {
    changeActive: function(name){
        this.items[name].isActive = !this.items[name].isActive;
        this.$http.post("/api/feature/" + name);
    }
  }
});