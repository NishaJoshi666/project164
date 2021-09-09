AFRAME.registerComponent("player-movement", {
    init: function(){
        this.walk();
    },

    walk: function(){
        window.addEventListener("keydown", (e)=>{
            if(
                e.key === "ArrowUp" ||
                e.key === "ArrowDown" ||
                e.key === "ArrowRight" ||
                e.key === "ArrowLeft"
            ){
                var entity = document.querySelecrtor("#sound2");
                entity.components.sound.playSound();
            }
        });
    },
})