AFRAME.registerComponent("car-rotation", {
    schema:{
        speedOfRotation: { type: "number", default: 0 }
    },
    init:function(){
        window.addEventListener("keydown", (e)=> {
            this.data.RotateValue = this.el.getAttribute("rotation");
            var carRotation = this.data.RotateValue
            if(e.key === "ArrowRight") {
                if(carRotation.y < 0.0001) {
                    carRotation.y += 10
                    this.el.setAttribute("rotation", carRotation)
                }
            }
            
            if(e.key === "ArrowLeft") {
                if(carRotation.y > -0.0001) {
                    carRotation.y -= 10
                    this.el.setAttribute("rotation", carRotation)
                }
            }
        })
        // var pos = this.el.getAttribute("rotation")
        // pos.x = this.data.moveX
        // this.el.setAttribute("rotation", {x:pos.x, y:pos.y, z:pos.z})
    }
})