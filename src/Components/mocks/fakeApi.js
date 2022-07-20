const products = [
    {id:'01', name:'random1', price:1500000, description:"Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqnibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'https://picsum.photos/200', category: 'used' },
    {id:'02', name:'random2', price:4500000, description:"Lorem i consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. ", img:'https://picsum.photos/201', category: 'used'   },
    {id:'03', name:'random3', price:2100000, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc" , img:'https://picsum.photos/202', category: 'used'  },
    {id:'04', name:'random4', price:1800000, description:"Lorem ipsum dolor sit amet, mpor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. ", img:'https://picsum.photos/203', category: 'used' },
    {id:'05', name:'random5', price:3500000, description:"Lorem ipsum dolodunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'https://picsum.photos/204', category: 'new' },
    {id:'06', name:'random6', price:2500000, description:"Lorem ipsum dolor sit amet,incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'https://picsum.photos/205', category: 'new'},
    {id:'07', name:'random7', price:1600000, description:"Lorem ipsum dolor sit amet,incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'https://picsum.photos/206', category: 'new'},
  ]

  export const getData = (categoryId) => {

  return new Promise ((resolve, reject) => {
    
    const filteredProds = products.filter((prod) => prod.category === categoryId );

    setTimeout(()=>{
      categoryId
      ? resolve( filteredProds)
      : resolve (products)
    },2000)
  })
}


export const getOne = (id) => {

  return new Promise ((resolve, reject) => {
    
    const foundProd = products.find(prod => prod.id === id );

    setTimeout(()=>{
     resolve(foundProd)
    
    },2000)
  })
}



 


