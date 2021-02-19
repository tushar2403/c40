class Player {
    constructor (){
    this.index=null;
    this.distance=0;
    this.name=null
    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on('value',function(data){
            playerCount=data.val();
        })

    }
    updateCount (count){
    database.ref('/').update({
        playerCount:count
    })
    
    }
    update(){
        var playerIndex ='players/player'+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }
    static getPlayerInfo () {
database.ref('players').on('value',(data)=>{
    allPlayers=data.val();
})
    }
    getCarAtEnd(){
  database.ref('CarsAtEnd').on('value',function(data){
    this.rank=data.val();
        })

    }
    static UpdateCarsAtEnd (rank){
        database.ref('/').update({
            CarsAtEnd:rank
        })
    }
}
