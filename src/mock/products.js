import remeras from '../assets/images/remeras.jpg'
import pantalones from '../assets/images/pantalones.jpg'
import camisas from '../assets/images/camisas.jpg'


const products = [
    {id: 1,
    nombre: "Remera Simple",
    categoria: "remeras",
    imagen: remeras,
    precio: 150,
    stock: 5,
    descripcion: "Remeras clásicas",
    },
    {id: 2,
    nombre: "Remera Combinadas",
    categoria: "remeras",
    imagen: remeras,
    precio: 10,
    stock: 7,
    descripcion: "Remeras Especiales"},
    {id: 3,
    nombre: "Pantalón Jean",
    categoria: "pantalones",
    imagen: pantalones,
    precio: 200,
    stock: 2,
    descripcion: "Pantalones Rasgados"},
    {id: 4,
    nombre: "Pantalón Jogger",
    categoria: "pantalones",
    imagen: pantalones,
    precio: 250,
    stock: 10,
    descripcion: "Pantalones de multiples colores"},
    {id: 5,
    nombre: "Camisa Simple",
    categoria: "camisas",
    imagen: camisas,
    precio: 50,
    stock: 4,
    descripcion: "Camisas con colores básicos"},
    {id: 6,
    nombre: "Camisa Estampada",
    categoria: "camisas",
    imagen: camisas,
    precio: 75,
    stock: 1,
    descripcion: "Camisas con múltiples diseños"},
]

export {products}