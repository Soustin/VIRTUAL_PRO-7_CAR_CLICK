AFRAME.registerComponent('car', {
    schema:{
        modelRef: { type:"string", default:"Car.glb"},
        moveX:{type:"number", default:1}
    },
    init: function() {
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x:0, y: 50, z: 80};
        const rotation = {x:0, y: 100, z: 0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
    },
    tick:function(){
        this.data.moveX= this.data.moveX + 0.1
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})