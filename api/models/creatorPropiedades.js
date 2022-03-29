const Propiedades = require ("./Propiedades")


Propiedades.bulkCreate(
    [
        {
            nombre: "La viudita",
            descripcion: "Casa de 4 ambientes refaccionada a nueva. Entrada para 2 autos , ( ingreso por portón automático). Living a y cocina comedor diario hecho a nuevo. ( DVH en sus ventanas.",
            precio: 199.000,
            ubicacion: "La Viudita 1199",
            imagen: "https://static.tokkobroker.com/pictures/44474807789780471825844041116162084438760290336110468013154969194008792564120.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]
        },
        {
            nombre: "La Gallineta",
            descripcion: "Excelente casa ubicada sobre calle La Gallineta en Circunscripción 1 sección 2 sobre rotonda.",
            precio: 245.000,
            ubicacion: "La Gallineta 1940",
            imagen: "https://static.tokkobroker.com/pictures/30436121664092997414780597232292834255252671064835994538283274150140882044896.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]   
        },
        {
            nombre: "El Guacamayo",
            descripcion: "Moderna casa de 5 ambientes con quincho y Pileta.",
            precio: 199.000,
            ubicacion: "El Guacamayo al 800",
            imagen: "https://static.tokkobroker.com/pictures/68957411118584425183411710349021368793883498464657664621661559730793539545373.jpg",
            disponible: true,
             categoria: ["casa","pileta","cochera","5 ambientes","4 baños"]
        },
        {
            nombre: "La Rosita",
            descripcion: "Chalet de 2 dormitorios ubicado en Circ. 2 Secc 3 sobre calle La Rosita, Ciudad Evita.",
            precio: 135.000,
            ubicacion: "La Rosita al 4400",
            imagen: "https://static.tokkobroker.com/pictures/108833548386279974388715543669789856304427599966708085812418190123016767553734.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","3 ambientes","2 baños"]
        },
        {
            nombre: "El Espinillo",
            descripcion: "Departamento 4 ambientes ubicado en el segundo piso con vista al contra frente del edificio , Barrio Solares del Aeropuerto, entrada sobre calle El Espinillo.",
            precio: 89.000 ,
            ubicacion: "El Espinillo 4100",
            imagen: "https://static.tokkobroker.com/pictures/33181836287030121605943360554516549108518159808087210842817762404505364204971.jpg",
            disponible: true,
            categoria: ["departamento","4 ambientes","2 baños"]
        },
        {
            nombre: "El Tacuapi",
            descripcion: "Departamento de 4 Ambientes en 1º Piso con cochera.",
            precio: 99.900 ,
            ubicacion: "El Tacuapi al 4200",
            imagen: "https://static.tokkobroker.com/pictures/89245147961480142778618065646470395520384761800820178796210715089547711144750.jpg",
            disponible: true,
            categoria: ["departamento","3 ambientes","1 baños"]
        },
        {
            nombre: "El Sauce al 800",
            descripcion: "Chalet de 3 dormitorios con pisos de parquet y placares empotrados ubicado en la Circ 4 Secc 4.",
            precio: 125.000,
            ubicacion: "El Sauce al 800",
            imagen: "https://static.tokkobroker.com/pictures/7108433006914164920823945678135196525089883351419223949317490052282939140141.jpg",
            disponible: true,
            categoria: ["casa","cochera","4 ambientes","1 baños"]
        },
        {
            nombre: "El Flamenco y El Matorro",
            descripcion: "Excelente Chalet estilo minimalista refaccionado a nuevo con 3 dormitorios. Se realizó cambio de aberturas, instalación de agua, luz y gas a nuevo.",
            precio: 215.000 ,
            ubicacion: "El Flamenco y El Matorro",
            imagen: "https://static.tokkobroker.com/pictures/110189033429967829429996055434981511150205977101283379188392500705771870067983.jpg",
            disponible: true,
            categoria: ["casa","pileta","4 ambientes","2 baños"]
        },
        {
            nombre: "Andres Lamas",
            descripcion: "Excelente calidad de construcción, compuesto por un dormitorio calefaccionado con estufa tiro balanceado y placard; cocina amueblada con bajo mesada, living - comedor y un baño completo.",
            precio: 49.000 ,
            ubicacion: "Andres Lamas al 2200",
            imagen: "https://static.tokkobroker.com/pictures/81475316701291272681237107181980406822673651295654648475002657354131787166343.jpg",
            disponible: true,
            categoria: ["departamento","cochera","2 ambientes","1 baños"]
        },
        {
            nombre: "Ruta 58 y Caceres",
            descripcion: "La Alameda está ubicada en una reconocida zona por su constante crecimiento y revalorización inmobiliaria.",
            precio: 42.000 ,
            ubicacion: "Ruta 58 y Caceres",
            imagen: "https://static.tokkobroker.com/pictures/52225014443397361254835102801320526240796330608708288518656824066410195397499.jpg",
            disponible: true,
            categoria: ["terreno"]
        },
        {
            nombre: "Ercilla",
            descripcion: "Casa de dos plantas en excelentes condiciones ubicada en el corazón de Barrio Naón, a una cuadra de la plaza Rómulo Zabala, dos cuadras de Av. Emilio Castro y una cuadra de colectora de Gral. Paz.",
            precio: 395.000 ,
            ubicacion: "Ercilla al 7600",
            imagen: "https://static.tokkobroker.com/pictures/13396989583972851981393057974333146899355840757802353604908130312336323828004.jpg",
            disponible: true,
            categoria: ["casa","4 ambientes","1 baños"]
        },
        {
            nombre: "Av. Córdoba",
            descripcion: "Living comedor, 2 dormitorios, baño completo y dependencia de servicio.",
            precio: 119.000  ,
            ubicacion: "Av. Córdoba al 1500",
            imagen: "https://static.tokkobroker.com/pictures/92645726455513593268037397254272758415245679372336219847724758043883803711819.jpg",
            disponible: true,
            categoria: ["departamento","3 ambientes","1 baños"]
        },
        {
            nombre: "Rio Salado",
            descripcion: "La propiedad principal (casa) de 7.50 x 11.00m en terreno de 3200 m2 con galería/garaje semi cubierto para dos autos, 3 dormitorios, un baño, cuarto de guarda, cocina completa y living - comedor.",
            precio: 359.000 ,
            ubicacion: "Rio Salado 60, Barrio Parque La Celia",
            imagen: "https://static.tokkobroker.com/pictures/73317492711205198442987631390551108337176535310203642651698404081467130870212.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]
        },
    ]
    )