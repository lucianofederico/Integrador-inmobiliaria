const Propiedades = require ("./Propiedades")


Propiedades.bulkCreate(
    [
        {
            nombre: "La Viudita",
            descripcion: "Casa de 4 ambientes refaccionada a nueva. Entrada para 2 autos , ( ingreso por portón automático). Jardín al fondo con pileta y cuarto de guardado donde encontramos caldera. Living a y cocina comedor diario hecho a nuevo. ( DVH en sus ventanas). Dormitorio principal en suite con vestidor y baño completo con jacuzzi. 2 y 3 er Dormitorio originales con placares , Baño completo reciclado. Todos los ambientes poseen calefacción por radiadores. Instalación de agua, electricidad , gas y techos realizada en el año 2016. Excelente orientación frente de la casa al este y contra frente al oeste, Super Luminosa",
            precio: 199.000,
            ubicacion: "La Viudita 1199",
            imagen: "https://static.tokkobroker.com/pictures/44474807789780471825844041116162084438760290336110468013154969194008792564120.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]
        },
        {
            nombre: "La Gallineta",
            descripcion: "Excelente casa ubicada sobre calle La Gallineta en Circunscripción 1 sección 2 sobre rotonda.Amplio jardín parquizado con pileta de fibra  y quincho semicubierto con parrilla y cocina con muebles bajo mesada y cocina a gas. Cuarto de guarda herramientas. Cocina comedor diario con muebles bajo mesada y alacena, living con hogar. Dormitorio principal con vista al frente, segundo dormitorio con salida a jardín de invierno y tercer dormitorio con baño en suite (todos con placares empotrados). Baño principal y lavadero independiente. Garage cubierto para dos autos con portón automático.",
            precio: 245.000,
            ubicacion: "La Gallineta 1940",
            imagen: "https://static.tokkobroker.com/pictures/30436121664092997414780597232292834255252671064835994538283274150140882044896.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]   
        },
        {
            nombre: "El Guacamayo",
            descripcion: "Moderna casa de 5 ambientes con quincho y Pileta. En PB espacio guarda coche para 4 autos con portón automático. Living- comedor super LUMINOSO , Cocina Amplia con anafe de 4 hornallas y horno empotrado. En esta misma planta LIVING , Dos dormitorios ( uno con placard y escritorio, otro con placard) y un baño completo. Fondo , con jardín y Pileta , cuarto de Guardado y Quincho ( parrilla , lavadero y baño con ducha). En PA Dormitorio en Suite con vestidor y baño con Hidromasaje. Salida a Balcón. 2do Dormitorio con baño completo en suite.",
            precio: 199.000,
            ubicacion: "El Guacamayo al 800",
            imagen: "https://static.tokkobroker.com/pictures/68957411118584425183411710349021368793883498464657664621661559730793539545373.jpg",
            disponible: true,
             categoria: ["casa","pileta","cochera","5 ambientes","4 baños"]
        },
        {
            nombre: "La Rosita",
            descripcion: "Chalet de 2 dormitorios ubicado en Circ. 2 Secc 3 sobre calle La Rosita, Ciudad Evita. El mismo cuenta con 2 baños completos con ante baño, cocina - comedor, living, galería cubierta con cerramientos de aluminio, 2 dormitorios (uno cuenta además con altillo), lavadero, fondo con piscina y cochera al frente para 2 autos.",
            precio: 135.000,
            ubicacion: "La Rosita al 4400",
            imagen: "https://static.tokkobroker.com/pictures/108833548386279974388715543669789856304427599966708085812418190123016767553734.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","3 ambientes","2 baños"]
        },
        {
            nombre: "El Espinillo",
            descripcion: "Departamento 4 ambientes ubicado en el segundo piso con vista al contra frente del edificio , Barrio Solares del Aeropuerto, entrada sobre calle El Espinillo. Compuesto de tres dormitorios con pisos flotante, placares empotrados y ventanales con vista al jardín, dos baños completos, balcón semicubierto con vista al contra frente del edificio (jardín), living , comedor, cocina con comedor diario y lavadero independiente en balcón con cerramiento dando vista al lateral del edificio. Excelente estado en general. Super luminoso. Edificio con ascensor.",
            precio: 89.000 ,
            ubicacion: "El Espinillo 4100",
            imagen: "https://static.tokkobroker.com/pictures/33181836287030121605943360554516549108518159808087210842817762404505364204971.jpg",
            disponible: true,
            categoria: ["departamento","4 ambientes","2 baños"]
        },
        {
            nombre: "El Tacuapi",
            descripcion: "Departamento de 4 Ambientes en 1º Piso con cochera. Cocina con comedor diario , lavadero separado. Living comedor con placard de guardado. Salida a balcón. 3 Dormitorios con placard y Baño reciclado a nuevo. Cochera se encuentra en la planta baja del edificio. El edificio cuenta con encardo de limpieza y Ascensor.",
            precio: 99.900 ,
            ubicacion: "El Tacuapi al 4200",
            imagen: "https://static.tokkobroker.com/pictures/89245147961480142778618065646470395520384761800820178796210715089547711144750.jpg",
            disponible: true,
            categoria: ["departamento","3 ambientes","1 baños"]
        },
        {
            nombre: "El Sauce",
            descripcion: "Chalet de 3 dormitorios con pisos de parquet y placares empotrados ubicado en la Circ 4 Secc 4. Living - comedor con ventiluz, sus grandes ventanales hacen que sea muy luminosos los ambientes. Dos baños. Amplio jardin libre con parque, quincho y parrilla.",
            precio: 125.000,
            ubicacion: "El Sauce al 800",
            imagen: "https://static.tokkobroker.com/pictures/7108433006914164920823945678135196525089883351419223949317490052282939140141.jpg",
            disponible: true,
            categoria: ["casa","cochera","4 ambientes","1 baños"]
        },
        {
            nombre: "El Flamenco y El Matorro",
            descripcion: "Excelente Chalet estilo minimalista refaccionado a nuevo con 3 dormitorios. Se realizó cambio de aberturas, instalación de agua, luz y gas a nuevo. Cochera descubierta para 2 autos con acceso a garage cubierto para 4 autos con portón automático. Living-comedor con pisos de porcelanato y paredes de estuco. Cocina con pisos de porcelanato y muebles de alto y bajo mesada recientemente colocados. Amplio lavadero y baño completo modernizado a nuevo. Los 3 dormitorios cuentan con placards y pisos simil madera. Quincho con parrilla y baño completo. Piscina con revestimiento de venecitas, regulador de temperatura del agua y juego de luces a control remoto.",
            precio: 215.000 ,
            ubicacion: "El Flamenco y El Matorro",
            imagen: "https://static.tokkobroker.com/pictures/110189033429967829429996055434981511150205977101283379188392500705771870067983.jpg",
            disponible: true,
            categoria: ["casa","pileta","4 ambientes","2 baños"]
        },
        {
            nombre: "Andres Lamas",
            descripcion: "Excelente calidad de construcción, compuesto por un dormitorio calefaccionado con estufa tiro balanceado y placard; cocina amueblada con bajo mesada, living - comedor y un baño completo. En la terraza cuenta con 2 parrillas, Sum y Terraza solárium.",
            precio: 49.000 ,
            ubicacion: "Andres Lamas al 2200",
            imagen: "https://static.tokkobroker.com/pictures/81475316701291272681237107181980406822673651295654648475002657354131787166343.jpg",
            disponible: true,
            categoria: ["departamento","cochera","2 ambientes","1 baños"]
        },
        {
            nombre: "Ruta 58 y Caceres",
            descripcion: "El Barrio se encuentra en su 2° etapa a la venta, que será de 232 lotes de 624 m2 a 1660 m2, de los cuales 35 lotes estarán ubicados sobre 3 exclusivas islas. En la etapa 1 del barrio, vendida en un 95%, los propietarios ya comenzaron sus obras. Aún quedan lotes para que puedas adquirir y construir en lo inmediato.",
            precio: 42.000 ,
            ubicacion: "Ruta 58 y Caceres",
            imagen: "https://static.tokkobroker.com/pictures/52225014443397361254835102801320526240796330608708288518656824066410195397499.jpg",
            disponible: true,
            categoria: ["terreno"]
        },
        {
            nombre: "Ercilla",
            descripcion: "Casa de dos plantas en excelentes condiciones ubicada en el corazón de Barrio Naón, a una cuadra de la plaza Rómulo Zabala, dos cuadras de Av. Emilio Castro y una cuadra de colectora de Gral. Paz.Compuesta de la siguiente manera: En planta alta: dos dormitorios amueblados, el principal con vestidor y un baño completo. En planta baja: living, cocina con comedor diario, un toilette, lavadero y patio con parrilla. En subsuelo: garage para dos autos, dependencia y lavadero.",
            precio: 395.000 ,
            ubicacion: "Ercilla al 7600",
            imagen: "https://static.tokkobroker.com/pictures/13396989583972851981393057974333146899355840757802353604908130312336323828004.jpg",
            disponible: true,
            categoria: ["casa","4 ambientes","1 baños"]
        },
        {
            nombre: "Av. Córdoba",
            descripcion: "Departamento de 3 ambientes c/ dep Av. Córdoba 1500. Oportunidad inversionista. Cocina comedor diario con lavadero separado y toilette. Living comedor, 2 dormitorios, baño completo y dependencia de servicio. El Mismo cuenta con servicios centrales , acceso a terraza. Apto profesional. Excelente ubicación. Muy buen estado.",
            precio: 119.000  ,
            ubicacion: "Av. Córdoba al 1500",
            imagen: "https://static.tokkobroker.com/pictures/92645726455513593268037397254272758415245679372336219847724758043883803711819.jpg",
            disponible: true,
            categoria: ["departamento","3 ambientes","1 baños"]
        },
        {
            nombre: "Rio Salado",
            descripcion: "El terreno principal cuenta con dos edificaciones, la casa principal, piscina y un quincho con cocina y baño independiente a la casa. El otro lote se compone de una cancha de futbol y parque arbolado. Ubicada sobre calle Rio Salado en barrio Parque La Celia. Exclusivo barrio de Ezeiza, super tranquilo y seguro. Bajas expensas. La propiedad principal (casa) de 7.50 x 11.00m en terreno de 3200 m2 con galería/garaje semi cubierto para dos autos, 3 dormitorios, un baño, cuarto de guarda, cocina completa y living - comedor. Quincho independiente de 8.00 x 4.30m con baño y cocina individual a la casa. Piscina de 12.00m de largo de forma irregular, cancha de Paddle a refaccionar y depósito de guarda herramientas.",
            precio: 359.000 ,
            ubicacion: "Rio Salado 60, Barrio Parque La Celia",
            imagen: "https://static.tokkobroker.com/pictures/73317492711205198442987631390551108337176535310203642651698404081467130870212.jpg",
            disponible: true,
            categoria: ["casa","pileta","cochera","4 ambientes","2 baños"]
        },
        {
            nombre: "Bevilaqua",
            descripcion: "Duplex de 3 Dormitorios en Cotevi 4 refaccionado. PB entrada para auto , Living comedor con toilet , Cocina ampliada con isla medidas 3 x 5. Al fondo salida al jardín, quincho con parrilla, Horno de barro , baño y Cuarto de herramientas. PA baño completo , 3 Dormitorios , Dorm Princ. de 4, 5 x 3",
            precio: 139.900  ,
            ubicacion: "Circ 4 Secc 2 M 3 Casa al 100",
            imagen: "https://static.tokkobroker.com/pictures/39988812052920625332954140355091774895468206384446319820866295852580975720919.jpg",
            disponible: true,
            categoria: ["casa","4 ambientes","2 baños"]
        },
        {
            nombre: "La Alameda",
            descripcion: "La Alameda está ubicada en una reconocida zona por su constante crecimiento y revalorización inmobiliaria. LOTE 323 (869 m2) INTERNO CON POSESIÓN INMEDIATA EN ETAPA 1 (expensas $13.000). El Barrio se encuentra en su 2° etapa a la venta, que será de 232 lotes de 624 m2 a 1660 m2, de los cuales 35 lotes estarán ubicados sobre 3 exclusivas islas. En la etapa 1 del barrio, vendida en un 95%, los propietarios ya comenzaron sus obras. Aún quedan lotes para que puedas adquirir y construir en lo inmediato.Contamos también con terrenos disponibles en la etapa 2 que aún no pagan expensas, ideal inversor que no piensa construir en el corto plazo. Si buscas financiación contamos con la etapa 3 ya disponible con diversas ubicaciones y dimensiones .",
            precio: 55.000  ,
            ubicacion: "La alameda Lote 323",
            imagen: "https://static.tokkobroker.com/pictures/46853494257662795710961704005330888226239569793808548904996391917201758297602.jpg",
            disponible: true,
            categoria: ["terreno"]
        },
        {
            nombre: "El Deslinde",
            descripcion: "Increíble emprendimiento Náutico en Canning con club house, Resto, Gimnasio, Spa, SUM. También cuenta con lagos y canales navegables sin motor, pesca deportiva, cuenta con todos los servicios subterráneos (agua, gas natural, luz, wifi, cloaca). Sector deportivo como canchas de futbol, voley, tenis y un playón deportivo. Además del inigualable entorno natural, Principado cuenta con todas las comodidades y servicios especialmente pensados para el disfrute de toda la familia. La calma, la seguridad y el confort hacen de Principado un barrio único en Canning. Contamos también con Lotes hacia la laguna, lotes con casas ya edificadas y lotes con posesión estimada en 24 meses (Enero 2024) ideal para inversión ya que no se abonarían expensas hasta la fecha.",
            precio: 50.000,
            ubicacion: "El deslinde 790",
            imagen: "https://static.tokkobroker.com/pictures/35219582532301022064409671801243520724190796904702177687184667910504011628262.jpg",
            disponible: true,
            categoria: ["terreno"]
        },
        {
            nombre: "Villa María",
            descripcion: "Terreno de 1400 m2 en el sector Arroyito de La Estancia Villa María, la cual se esta constituyendo como uno de los Emprendimientos mas exclusivos de la Argentina, rodeado de extensas arboledas ideal para quienes gusten de la vida al aire libre y rodeados de naturaleza. A solo 45 minutos de CABA por Autopista Ezeiza-Cañuelas y a 10 minutos del centro de Canning. El terreno se encuentra amojonado, posee electricidad y está al día de Expensas y ABL . Amenities: Canchas de Futbol, Tenis y Vóley, Escuela Ecuestre y Escuela de Polo, Cancha de Golf de 18 hoyos, 4 Canchas de Polo, Piscina, Club House , Hípico y Caballerizas.",
            precio: 44.000  ,
            ubicacion: "Villa Maria 1110",
            imagen: "https://static.tokkobroker.com/pictures/17081147708710928878432464188776531661351128679384122500279971627140917422842.jpg",
            disponible: true,
            categoria: ["terreno"]
        },
        {
            nombre: "Chingolo",
            descripcion: "Venta de Tres Cabañas en Villa Ventana, Tornquist.Terreno superficie 950m2. Todo en ladrillon de Mendoza a la vista, techo a 2 aguas en chapa revestido interno, el techo en madera barnizada. Parrilla individual en cada cabaña. Cochera individual techada en cada cabaña. Piscina de 3 x 5m con deck de madera. Sobre la ruta 76 a 17 km. de Sierra de la Ventana y a 9 km. del Cerro Ventana.",
            precio: 44.000,
            ubicacion: "Chingolo 100",
            imagen: "https://static.tokkobroker.com/pictures/91741486710068478633914562247088908980153858114138831973981068131736780595528.jpg",
            disponible: true,
            categoria: ["casa", "cochera", "5 ambientes", "3 baños"]
        },
        {
            nombre: "Bermejo",
            descripcion: "Casa en venta de 3 ambientes en San Justo. la misma posee un dormitorio con la posibilidad de realizar otro. Cocina , comedor diario , living y baño completo. En el patio nos encontramos con el lavadero y acceso hacia la terraza. Quincho con parrilla y terraza libre. Muy cerca shopping de San Justo, Supermercado Waltmart. Universidad de la Matanza y Hospital Italiano. Acceso a lineas de colectivos, metrobus.",
            precio: 95.000,
            ubicacion: "Bermejo al 4200",
            imagen: "https://static.tokkobroker.com/pictures/16372218695624783826814713973197892141246877125598868056071343102867784585340.jpg",
            disponible: true,
            categoria: ["casa", "3 ambientes", "1 baños"]
        },
        {
            nombre: "Murguiondo",
            descripcion: "AMPLIA CASA EN DOS PLANTAS CON LA SIGUIENTE DISTRIBUCIÓN: EN PLANTA ALTA: - 3 Dormitorios (uno con baño en suite y vestidor)- 2 Baños EN PLANTA BAJA: - Cocina Comedor - Living de 7x4 mts- Baño - Quincho con Parrilla , baño y 1 habitación o depósito.  - Patio descubierto. - Garaje para 1 auto Acepta permuta por departamento o PH en CABA.",
            precio: 225.000,
            ubicacion: "Murguiondo 3100",
            imagen: "https://static.tokkobroker.com/pictures/35372207144932571419369969409989403470262328938348679430098804555588209319873.jpg",
            disponible: true,
            categoria: ["casa", "5 ambientes", "1 baños"]
        },
        {
            nombre: "Oliden",
            descripcion: "Hermosa casa de 5 ambientes sobre lote de 8,66 x 25 mts (amplio lote en la zona). Compuesta por hall de entrada con ingreso para vehículo, cuatro dormitorios (uno con baño en suite), amplio living, comedor y cocina. Galería semi cubierta con lavadero integrado, patio libre y jardín con parrilla. Dependencia al fondo junto con cuarto de guarda herramientas.  Excelente ubicación respecto a los accesos, a sólo unas cuadras de Av. Gral paz y Eva Perón.",
            precio: 149.000,
            ubicacion: "Oliden al 2900",
            imagen: "https://static.tokkobroker.com/pictures/13977184882873470089410753774745771919270060052366824003001048223660498182122.jpg",
            disponible: true,
            categoria: ["casa", "cochera", "5 ambientes", "3 baños"]
        },
        {
            nombre: "Esporal",
            descripcion: "Oportunidad, acepta permuta por casa mayor valor en Ciudad Evita o San Justo. Departamento ubicado en barrio El Esporal, rápido acceso a la autopista Ricchieri. Primer piso.Compuesto por dos dormitorios, un baño completo. Living - comedor con pisos de cerámicos, cocina con muebles de bajo mesada y alacena. Lavadero independiente y comedor diario separado a la cocina. Ambos dormitorios con espaciosos placares internos.El Edificio cuenta con amplios espacios verdes parquizados y sector de parrilla.",
            precio: 85.000,
            ubicacion: "El Esporal 4500",
            imagen: "https://static.tokkobroker.com/pictures/7242220690995218981008515419660130812396923356473009444016058099789584349714.jpg",
            disponible: true,
            categoria: ["departamento", "3 ambientes", "1 baños"]
        },
        {
            nombre: "Av. Avellaneda",
            descripcion: "Semipiso de 3 ambientes con cocina comedor integrado. Baño completo y toilette en excelentes condiciones. Balcón semi cubierto con lavadero. Baulera propia. El edificio posee SUM, piscina y parrilla",
            precio: 165.000,
            ubicacion: "Av. Avellaneda al 1700",
            imagen: "https://static.tokkobroker.com/pictures/110466743221144319699125206615123744820791201848910545486794518256122984767431.jpg",
            disponible: true,
            categoria: ["departamento", "3 ambientes", "1 baños"]
        },
        {
            nombre: "Plaza",
            descripcion: "Dos Ambientes con balcón al frente. Edificio boutique de 4 pisos y 3 deptos. por piso. excelentes detalles de Categoría. En Pb Hall, espejo de Agua y acceso a cocheras por portón automatizado. Terraza con Solárium y Piscina infinita. El mismo cuenta con cocina abierta lateral , lugar para lavarropa, cocina de 4 Hornallas Orbis. Dormitorio con frente e interior de placard de melamina. Preinstalación para aire acondicionado en ambos Amb. Muebles de Bajo mesada y alacena Completos, Bacha Johnson y Grifería monocomando FV. Calefón Orbis digital. A media cuadra de Av. Monroe. Muy cerca del DOHO ( Circuito Gourmet)",
            precio: 119.900,
            ubicacion: "Plaza al 2500",
            imagen: "https://static.tokkobroker.com/pictures/55227664484421352177133237467267330496779629003733580194001961949903744045405.jpg",
            disponible: true,
            categoria: ["departamento", "3 ambientes", "1 baños"]
        },
        {
            nombre: "Campichuelo",
            descripcion: "Dos Ambientes al contrafrente con Patio. Cocina refaccionada lavadero incorporado en la misma. Living comedor amplio y dormitorio con placard. Desde el dormitorio se accede al patio. apto profesional. Muy Buena Ubicación a dos de Parque Rivadavia y a 4 de Parque Centenario",
            precio: 107.000,
            ubicacion: "Campichuelo al 200",
            imagen: "https://static.tokkobroker.com/pictures/102510599902980316134733560549222454494678551848913855964509280126379158482436.jpg",
            disponible: true,
            categoria: ["departamento", "2 ambientes", "1 baños"]
        },
    ]
    )