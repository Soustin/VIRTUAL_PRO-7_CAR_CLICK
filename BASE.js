AFRAME.registerComponent("base", {
    schema: {
        radius: { type: "number", default: 150 },
        height: { type: "number", default: 3 },
        moveZ:{type:"number", default:1}
    },

    init: function() {
        this.el.setAttribute("geomentry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material",  { color:"#1769aa" });
    },

    // tick:function(){
    //     this.data.moveX = this.data.moveX + 0.1
    //     var pos = this.el.getAttribute("position")
    //     pos.x = this.data.moveX
    //     this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    // },

    // tick:function(){
    //         this.data.moveZ = this.data.moveZ + 0.1
    //         var pos = this.el.getAttribute("position")
    //         pos.z = this.data.moveZ
    //         this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    // }

})