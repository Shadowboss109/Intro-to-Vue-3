app.component('product-detail',{
    props:{
        detail:{
            type:String


        }
    },
    template:
        /*html*/
        `<div class="product-detail"></div>
        <p>{{detail}}</p>`
    
}

)