const CatsData = [
    {
        id: 1,
        name:'Mimo',
        year:'1',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 2,
        name:'Pipoca',
        year:'1',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/2581153/pexels-photo-2581153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 3,
        name:'Van Halen',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1559782766-c2ba7a95dd95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 4,
        name:'Paçoca',
        year:'4',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 5,
        name:'Yummi',
        year:'2',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 6,
        name:'Neji',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1583023297298-9c17fecb197e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80'
    },
    {
        id: 7,
        name:'Lobitos',
        year:'2',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1581460000963-755eec994cf0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 8,
        name:'Alex',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.pexels.com/photos/1422754/pexels-photo-1422754.png?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 9,
        name:'Cute',
        year:'2',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.unsplash.com/photo-1598463166261-357c23778812?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1305&q=80'
    },
    {
        id: 10,
        name:'Canela',
        year:'3',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/2373664/pexels-photo-2373664.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 11,
        name:'Eleven',
        year:'3',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 12,
        name:'Malu',
        year:'2',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/2835623/pexels-photo-2835623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 13,
        name:'Van Gog',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1603349136483-c9087327668c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 14,
        name:'Sol',
        year:'5',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/979278/pexels-photo-979278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 15,
        name:'Fofura',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.pexels.com/photos/1457595/pexels-photo-1457595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 16,
        name:'Musculoso',
        year:'4',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1575034847685-26de555c2691?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 17,
        name:'Gin',
        year:'4',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/3623368/pexels-photo-3623368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 18,
        name:'Topokki',
        year:'3',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.pexels.com/photos/3782766/pexels-photo-3782766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 19,
        name:'Yellow',
        year:'4',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/1440967/pexels-photo-1440967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 20,
        name:'Fluflu',
        year:'2',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/53446/cat-feline-furry-pet-53446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 21,
        name:'Strong',
        year:'3',
        info:'Castrada | Vermifugada',
        genero:'Macho',
        image:'https://images.pexels.com/photos/733105/pexels-photo-733105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        id: 22,
        name:'Dengosa',
        year:'5',
        info:'Castrada | Vermifugada',
        genero:'Femêa',
        image:'https://images.unsplash.com/photo-1522856339183-9a8b06b05937?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 23,
        name:'Floquinhos',
        year:'2',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.pexels.com/photos/1469228/pexels-photo-1469228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 24,
        name:'Miau',
        year:'1',
        info:'Castrado | Vermifugado',
        genero:'Macho',
        image:'https://images.unsplash.com/photo-1589348146593-037719bdeab3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 25,
        name:'Cereja',
        year:'1',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.pexels.com/photos/1931371/pexels-photo-1931371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id: 26,
        name:'Pantera',
        year:'4',
        info:'Castrada | Vermifugada',
        genero:'Fêmea',
        image:'https://images.unsplash.com/photo-1587642808058-f2380dc5cbc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    }
]

export default CatsData