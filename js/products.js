/*
  Catálogo de productos reales (origen: Ordem 01512, factura de compra en BRL).
  - "image": deja null para mostrar un ícono decorativo de reemplazo (aún no hay foto).
    Cuando tengas la foto real, guárdala en images/productos/ con el nombre indicado
    en el comentario de cada producto y pon esa ruta aquí.
  - "cost": costo de compra en BRL (reales), sin símbolo, tomado directo de la Ordem 01512.
    El precio de venta se calcula en main.js como cost / CONFIG.marginDivisor (cost / 0.4).
  - "category": colares | pulseiras | pingentes | brincos | aneis
*/

const PRODUCTS = [
  // Código XCC145472318340 - images/productos/XCC145472318340_01_st.jpg
  {
    id: "colar-coracao-cartier",
    category: "colares",
    name: { es: "Collar Cartier Corazón Medio Cristal", pt: "Colar Cartier Coração Meio Cravejado" },
    desc: {
      es: "Collar en plata 925 estilo Cartier con dije de corazón mitad liso mitad engastado con circonia, cadena 40cm + 3cm.",
      pt: "Colar em prata 925 estilo Cartier com pingente de coração metade liso metade cravejado com zircônia, corrente 40cm + 3cm."
    },
    cost: 58.19,
    image: "images/productos/XCC145472318340_01_st.jpg"
  },
  // Código XCC1554724036 - images/productos/XCC1554724036_01_st.jpg
  {
    id: "gargantilha-circulos-entrelacados",
    category: "colares",
    name: { es: "Gargantilla Círculos Entrelazados", pt: "Gargantilha Círculos Entrelaçados" },
    desc: {
      es: "Gargantilla en plata 925 con dos círculos entrelazados, uno liso y otro engastado con circonia.",
      pt: "Gargantilha em prata 925 com dois círculos entrelaçados, um liso e outro cravejado com zircônia."
    },
    cost: 54.93,
    image: "images/productos/XCC1554724036_01_st.jpg"
  },
  // Código XCC2654724089 - images/productos/XCC2654724089_01_st.jpg
  {
    id: "gargantilha-cruz-dupla-vazada",
    category: "colares",
    name: { es: "Gargantilla Cruz Doble Calada", pt: "Gargantilha Cruz Dupla Vazada" },
    desc: {
      es: "Gargantilla en plata 925 con doble cruz superpuesta, una calada y otra engastada con circonia, baño de rodio.",
      pt: "Gargantilha em prata 925 com dupla cruz sobreposta, uma vazada e outra cravejada com zircônia, banho de ródio."
    },
    cost: 59.09,
    image: "images/productos/XCC2654724089_01_st.jpg"
  },
  // Código XCC2154724101 - images/productos/XCC2154724101_01_st.jpg
  {
    id: "gargantilha-elos-circulares",
    category: "colares",
    name: { es: "Gargantilla Eslabones Circulares Entrelazados", pt: "Gargantilha Elos Circulares Entrelaçados" },
    desc: {
      es: "Gargantilla en plata 925 con tres círculos entrelazados, dos lisos y uno engastado con circonia.",
      pt: "Gargantilha em prata 925 com três círculos entrelaçados, dois lisos e um cravejado com zircônia."
    },
    cost: 88.20,
    image: "images/productos/XCC2154724101_01_st.jpg"
  },
  // Código XCC115472309640 - images/productos/XCC115472309640_01_st.jpg
  {
    id: "colar-arvore-vida-casal",
    category: "colares",
    name: { es: "Collar Árbol de la Vida con Pareja", pt: "Colar Árvore da Vida com Casal" },
    desc: {
      es: "Collar en plata 925 estilo Cartier con dije árbol de la vida engastado con circonia y una pareja lisa debajo, delicado y simbólico.",
      pt: "Colar em prata 925 estilo Cartier com pingente árvore da vida cravejado com zircônia e um casal liso embaixo, delicado e simbólico."
    },
    cost: 69.53,
    image: "images/productos/XCC115472309640_01_st.jpg"
  },
  // Código XCC145472404740 - images/productos/XCC145472404740_01_st.jpg
  {
    id: "colar-elo-portugues",
    category: "colares",
    name: { es: "Collar Eslabón Portugués Corazón e Infinito", pt: "Colar Elo Português Coração e Infinito" },
    desc: {
      es: "Collar en plata 925 con eslabón portugués, dije de corazón e infinito entrelazados con circonia, delicado y elegante.",
      pt: "Colar em prata 925 com elo português, pingente de coração e infinito entrelaçados com zircônia, delicado e elegante."
    },
    cost: 53.88,
    image: "images/productos/XCC145472404740_01_st.jpg"
  },
  // Código XCC1154713021 - images/productos/XCC1154713021_01_st.jpg
  {
    id: "gargantilha-madreperola-oval",
    category: "colares",
    name: { es: "Gargantilla Nácar Ovalado", pt: "Gargantilha Madrepérola Oval" },
    desc: {
      es: "Gargantilla en plata 925 con nácar ovalado y contorno engastado con circonia, cadena 42cm + 3cm.",
      pt: "Gargantilha em prata 925 com madrepérola oval e contorno cravejado com zircônia, corrente 42cm + 3cm."
    },
    cost: 75.67,
    image: "images/productos/XCC1154713021_01_st.jpg"
  },
  // Código XCC1454723193 - images/productos/XCC1454723193_01_st.jpg
  {
    id: "gargantilha-ponto-de-luz",
    category: "colares",
    name: { es: "Gargantilla Punto de Luz", pt: "Gargantilha Ponto de Luz" },
    desc: {
      es: "Gargantilla punto de luz en plata 925 con circonia de 3,5mm y acabado en rodio.",
      pt: "Gargantilha ponto de luz em prata 925 com zircônia de 3,5mm e acabamento em ródio."
    },
    cost: 43.10,
    image: "images/productos/XCC1454723193_01_st.jpg"
  },
  // Código XCC2254724126 - images/productos/XCC2254724126_01_st.jpg
  {
    id: "gargantilha-riviera",
    category: "colares",
    name: { es: "Gargantilla Media Riviera con Circonias", pt: "Gargantilha Meia Riviera com Zircônias" },
    desc: {
      es: "Gargantilla rivière en plata 925 con circonias en la mitad frontal y baño de rodio.",
      pt: "Gargantilha riviera em prata 925 com zircônias na metade frontal e banho de ródio."
    },
    cost: 85.65,
    image: "images/productos/XCC2254724126_01_st.jpg"
  },
  // Código XCC145472309340 - images/productos/XCC145472309340_01_st.jpg
  {
    id: "gargantilha-cruz-dupla-cartier",
    category: "colares",
    name: { es: "Gargantilla Cruz Curva Cartier", pt: "Gargantilha Cruz Curva Cartier" },
    desc: {
      es: "Gargantilla en plata 925 estilo Cartier con dije de cruz de líneas curvas, mitad engastada con circonia y mitad calada.",
      pt: "Gargantilha em prata 925 estilo Cartier com pingente de cruz de linhas curvas, metade cravejada com zircônia e metade vazada."
    },
    cost: 62.50,
    image: "images/productos/XCC145472309340_01_st.jpg"
  },
  // Código XCC1154713019 - images/productos/XCC1154713019_01_st.jpg
  {
    id: "gargantilha-madreperola-sol",
    category: "colares",
    name: { es: "Gargantilla Medalla de Nácar y Sol", pt: "Gargantilha Medalha de Madrepérola e Sol" },
    desc: {
      es: "Gargantilla en plata 925 con medalla redonda de nácar y detalle de sol, cadena 42cm + 3cm.",
      pt: "Gargantilha em prata 925 com medalha redonda de madrepérola e detalhe em sol, corrente 42cm + 3cm."
    },
    cost: 63.40,
    image: "images/productos/XCC1154713019_01_st.jpg"
  },
  // Código XCC1754524110 - images/productos/XCC1754524110_01_st.jpg
  {
    id: "pulseira-fall-in-love",
    category: "pulseiras",
    name: { es: "Pulsera Fall in Love", pt: "Pulseira Fall in Love" },
    desc: {
      es: "Pulsera en plata 925 con dos aros entrelazados, uno grabado 'Fall in Love' y otro engastado con circonia, baño de rodio.",
      pt: "Pulseira em prata 925 com dois argolas entrelaçadas, uma gravada 'Fall in Love' e outra cravejada com zircônia, banho de ródio."
    },
    cost: 40.77,
    image: "images/productos/XCC1754524110_01_st.jpg"
  },
  // Código XCC2054524090 - images/productos/XCC2054524090_01_st.jpg
  {
    id: "pulseira-infinito",
    category: "pulseiras",
    name: { es: "Pulsera Infinito Engastado", pt: "Pulseira Infinito Cravejado" },
    desc: {
      es: "Pulsera doble cadena en plata 925 con símbolo infinito engastado con circonia y acabado en rodio.",
      pt: "Pulseira corrente dupla em prata 925 com símbolo infinito cravejado com zircônia e acabamento em ródio."
    },
    cost: 57.00,
    image: "images/productos/XCC2054524090_01_st.jpg"
  },
  // Código XCC1454324032 - images/productos/XCC1454324032_01_st.jpg
  {
    id: "pingente-arvore-da-vida",
    category: "pingentes",
    name: { es: "Colgante Árbol de la Vida", pt: "Pingente Árvore da Vida" },
    desc: {
      es: "Colgante Árbol de la Vida en plata 925 con tronco engastado con circonias y acabado en rodio.",
      pt: "Pingente Árvore da Vida em prata 925 com tronco cravejado com zircônias e acabamento em ródio."
    },
    cost: 32.33,
    image: "images/productos/XCC1454324032_01_st.jpg"
  },
  // Código XCC1254122175 - images/productos/XCC1254122175_01_st.jpg
  {
    id: "brinco-argola-cravejado",
    category: "brincos",
    name: { es: "Arete Aro Engastado", pt: "Brinco Argola Cravejada" },
    desc: {
      es: "Arete tipo aro en plata 925 totalmente engastado con circonias y baño de rodio.",
      pt: "Brinco argola em prata 925 totalmente cravejada com zircônias e banho de ródio."
    },
    cost: 58.44,
    image: "images/productos/XCC1254122175_01_st.jpg"
  },
  // Código XCC1254122140 - images/productos/XCC1254122140_01_st.jpg
  {
    id: "brinco-argola-click",
    category: "brincos",
    name: { es: "Arete Aro Click con Circonia", pt: "Brinco Argola Click com Zircônia" },
    desc: {
      es: "Arete tipo aro click en plata 925 con solitario de circonia y baño de rodio.",
      pt: "Brinco argola click em prata 925 com solitário de zircônia e banho de ródio."
    },
    cost: 52.18,
    image: "images/productos/XCC1254122140_01_st.jpg"
  },
  // Código XCC1554123338 - images/productos/XCC1554123338_01_st.jpg
  {
    id: "brinco-gota-zirconias",
    category: "brincos",
    name: { es: "Arete Gota con Circonias", pt: "Brinco Gota com Zircônias" },
    desc: {
      es: "Arete gota en plata 925 con engastado de circonias, aprox. 1,4g.",
      pt: "Brinco gota em prata 925 com cravejado de zircônias, aprox. 1,4g."
    },
    cost: 28.56,
    image: "images/productos/XCC1554123338_01_st.jpg"
  },
  // Código XCC0657122006 - images/productos/XCC0657122006_01_st.jpg
  {
    id: "brinco-solitario-quadrado",
    category: "brincos",
    name: { es: "Arete Solitario Circonia Cuadrada", pt: "Brinco Solitário Zircônia Quadrada" },
    desc: {
      es: "Arete solitario en plata 925 con circonia cuadrada de 7mm de brillo intenso.",
      pt: "Brinco Solitário em Prata 925 com Zircônia Quadrada de 7mm de Brilho Intenso."
    },
    cost: 44.81,
    image: "images/productos/XCC0657122006_01_st.jpg"
  },
  // Código XCC1757224002 - images/productos/XCC1757224002_01_st.jpg
  {
    id: "anel-ajustavel-3-linhas",
    category: "aneis",
    name: { es: "Anillo Ajustable 3 Líneas de Circonias", pt: "Anel Ajustável 3 Linhas de Zircônias" },
    desc: {
      es: "Anillo en plata 925 ajustable con 3 líneas de circonias engastadas, moderno y sofisticado.",
      pt: "Anel em prata 925 ajustável com 3 linhas de zircônias cravejadas, moderno e sofisticado."
    },
    cost: 77.01,
    image: "images/productos/XCC1757224002_01_st.jpg"
  },
  // Código XCN0954223324 - images/productos/XCN0954223324_01_st.jpg
  {
    id: "anel-moissanite-oval",
    category: "aneis",
    name: { es: "Anillo Moissanita Ovalada", pt: "Anel Moissanite Oval" },
    desc: {
      es: "Anillo en plata 925 con moissanita ovalada central y laterales engastados con circonias, acabado en rodio.",
      pt: "Anel em prata 925 com moissanite oval central e laterais cravejadas com zircônias, acabamento em ródio."
    },
    cost: 94.73,
    image: "images/productos/XCN0954223324_01_st.jpg"
  },
  // Código XCC0954222099 - images/productos/XCC0954222099_01_st.jpg
  {
    id: "anel-fios-ondulados",
    category: "aneis",
    name: { es: "Anillo Hilos Ondulados con Circonias", pt: "Anel Fios Ondulados com Zircônias" },
    desc: {
      es: "Anillo en plata 925 con hilos ondulados entrelazados, algunos lisos y otros engastados con circonias.",
      pt: "Anel em prata 925 com fios ondulados entrelaçados, alguns lisos e outros cravejados com zircônias."
    },
    cost: 63.26,
    image: "images/productos/XCC0954222099_01_st.jpg"
  },
  // Código XCN1254223332 - images/productos/XCN1254223332_01_st.jpg
  {
    id: "anel-solitario-moissanite-gota",
    category: "aneis",
    name: { es: "Anillo Solitario Moissanita Talla Gota", pt: "Anel Solitário Moissanite Lapidação Gota" },
    desc: {
      es: "Anillo solitario en plata 925 con moissanita en talla gota y acabado en rodio.",
      pt: "Anel solitário em prata 925 com moissanite em lapidação gota e acabamento em ródio."
    },
    cost: 107.82,
    image: "images/productos/XCN1254223332_01_st.jpg"
  },
  // Código XCN1354223223 - images/productos/XCN1354223223_01_st.jpg
  {
    id: "anel-solitario-moissanite-quadrada",
    category: "aneis",
    name: { es: "Anillo Solitario Moissanita Cuadrada", pt: "Anel Solitário Moissanite Quadrada" },
    desc: {
      es: "Anillo solitario en plata 925 con moissanita cuadrada y laterales engastados con circonias.",
      pt: "Anel solitário em prata 925 com moissanite quadrada e laterais cravejadas com zircônias."
    },
    cost: 71.33,
    image: "images/productos/XCN1354223223_01_st.jpg"
  },

  /* ===== Segunda tanda de productos (pedido aparte, fotos .webp) ===== */
  {
    id: "brinco-pressao-cartilagem-corrente",
    category: "brincos",
    name: { es: "Arete de Presión para Cartílago con Cadena", pt: "Brinco de Pressão Para Cartilagem com Corrente" },
    desc: {
      es: "Arete de presión para cartílago con cadena colgante, tono envejecido.",
      pt: "Brinco de pressão para cartilagem com corrente pendente, tom envelhecido."
    },
    cost: 23.27,
    image: "images/productos/Brinco de Pressão Para Cartilagem com Corrente.webp"
  },
  {
    id: "trio-brincos-argolas-quadradas",
    category: "brincos",
    name: { es: "Trío de Aretes con Aros Cuadrados", pt: "Trio de Brincos com Argolas Quadradas" },
    desc: {
      es: "Set de 3 aretes tipo aro cuadrado, tono blanco.",
      pt: "Conjunto de 3 brincos tipo argola quadrada, tom branco."
    },
    cost: 32.90,
    images: [
      "images/productos/Trio de Brincos com Argolas Quadradas1.webp",
      "images/productos/Trio de Brincos com Argolas Quadradas2.webp"
    ]
  },
  {
    id: "brinco-pressao-minimalista-grosso",
    category: "brincos",
    name: { es: "Arete de Presión Minimalista Grueso", pt: "Brinco de Pressão Minimalista Grosso" },
    desc: {
      es: "Arete de presión minimalista de aro grueso, tono blanco.",
      pt: "Brinco de pressão minimalista de argola grossa, tom branco."
    },
    cost: 56.90,
    images: [
      "images/productos/Brinco de Pressão Minimalista Grosso1.webp",
      "images/productos/Brinco de Pressão Minimalista Grosso2.webp"
    ]
  },
  {
    id: "brinco-argola-sol",
    category: "brincos",
    name: { es: "Arete de Aro con Sol", pt: "Brinco de Argola com Sol" },
    desc: {
      es: "Arete tipo aro con dije de sol, tono blanco.",
      pt: "Brinco tipo argola com pingente de sol, tom branco."
    },
    cost: 90.80,
    image: "images/productos/Brinco de Argola com Sol.webp"
  },
  {
    id: "brinco-lua-zirconias",
    category: "brincos",
    name: { es: "Arete de Luna Engastado con Circonias", pt: "Brinco de Lua Cravejado com Zircônias" },
    desc: {
      es: "Arete con forma de luna engastado con circonias, tono blanco.",
      pt: "Brinco em formato de lua cravejado com zircônias, tom branco."
    },
    cost: 52.90,
    image: "images/productos/Brinco de Lua Cravejado com Zircônias.webp"
  },
  {
    id: "brinco-pendulo-meditacion",
    category: "brincos",
    name: { es: "Arete de Gancho Trabajado con Péndulo de Meditación", pt: "Brinco de Gancho Trabalhado e Pêndulo de Meditação" },
    desc: {
      es: "Arete de gancho con acabado trabajado y péndulo de meditación colgante, tono envejecido.",
      pt: "Brinco de gancho com acabamento trabalhado e pêndulo de meditação pendente, tom envelhecido."
    },
    cost: 72.15,
    image: "images/productos/Brinco de Gancho Trabalhado e Pêndulo de Meditação.webp"
  },
  {
    id: "brinco-flor-envelhecido",
    category: "brincos",
    name: { es: "Arete de Flor Envejecido Pequeño", pt: "Brinco de Flor Envelhecido Pequeno" },
    desc: {
      es: "Arete pequeño con forma de flor, tono envejecido.",
      pt: "Brinco pequeno em formato de flor, tom envelhecido."
    },
    cost: 32.90,
    image: "images/productos/Brinco de Flor Envelhecido Pequeno.webp"
  },
  {
    id: "anel-aro-flor-lotus",
    category: "aneis",
    name: { es: "Anillo Aro Liso con Flor de Loto", pt: "Anel Aro Liso com Flor de Lótus" },
    desc: {
      es: "Anillo de aro liso con dije de flor de loto, tono envejecido.",
      pt: "Anel de aro liso com pingente de flor de lótus, tom envelhecido."
    },
    cost: 81.90,
    image: "images/productos/Anel Aro Liso com Flor de Lótus.webp"
  },
  {
    id: "brinco-argola-sol-lua",
    category: "brincos",
    name: { es: "Arete de Aro con Sol y Luna Trabajado", pt: "Brinco de Argola com Sol e Lua Trabalhado" },
    desc: {
      es: "Arete tipo aro con sol y luna de acabado trabajado, tono envejecido.",
      pt: "Brinco tipo argola com sol e lua de acabamento trabalhado, tom envelhecido."
    },
    cost: 126.90,
    image: "images/productos/Brinco de Argola com Sol e Lua Trabalhado.webp"
  },
  {
    id: "brinco-simbolo-om",
    category: "brincos",
    name: { es: "Arete del Símbolo Om Calado", pt: "Brinco do Símbolo Om Vazado" },
    desc: {
      es: "Arete con símbolo Om calado, tono envejecido.",
      pt: "Brinco com símbolo Om vazado, tom envelhecido."
    },
    cost: 47.90,
    image: "images/productos/Brinco do Símbolo Om Vazado.webp"
  },
  {
    id: "pulseira-fio-torcido",
    category: "pulseiras",
    name: { es: "Pulsera de Cierre Hilo Torcido 4mm", pt: "Bracelete de Fecho Fio Torcido 4mm" },
    desc: {
      es: "Pulsera brazalete con cierre de hilo torcido de 4mm, tono blanco.",
      pt: "Bracelete com fecho de fio torcido de 4mm, tom branco."
    },
    cost: 57.60,
    image: "images/productos/BRACELETE DE FECHO FIO TORCIDO - 4mm.webp"
  },
  {
    id: "pulseira-yin-yang",
    category: "pulseiras",
    name: { es: "Pulsera Yin Yang", pt: "Bracelete Yin-Yang" },
    desc: {
      es: "Pulsera brazalete con dije de yin yang.",
      pt: "Bracelete com pingente de yin-yang."
    },
    cost: 182.60,
    image: "images/productos/Bracelete Yin- Yang.webp"
  },

  /* ===== Tercera tanda de productos (Línea LUA) ===== */
  {
    id: "gargantilha-gravata-perola-pao",
    category: "colares",
    name: { es: "Gargantilla Corbata con Perla Pan", pt: "Gargantilha Gravata com Pérola Pão" },
    desc: {
      es: "Gargantilla estilo corbata en plata 925 con perla pan, 55cm.",
      pt: "Gargantilha estilo gravata em prata 925 com pérola pão, 55cm."
    },
    cost: 143.50,
    image: "images/productos/Gargantilha Gravata com Pérola Pão - 55cm.webp"
  },
  {
    id: "gargantilha-perola-agua-doce",
    category: "colares",
    name: { es: "Gargantilla Perla de Agua Dulce con Circonias", pt: "Gargantilha Pérola Água Doce Cravejada de Zircônia" },
    desc: {
      es: "Gargantilla en plata 925 con perla de agua dulce, engastada con circonia cristal y vidrillos, 40cm.",
      pt: "Gargantilha em prata 925 com pérola água doce, cravejada com zircônia cristal e vidrilhos, 40cm."
    },
    cost: 126.75,
    image: "images/productos/Gargantilha com Pérola Água Doce Cravejada de Zircônia Cristal e Vidrilhos - 40cm.webp"
  },
  {
    id: "corrente-pipoca-fina",
    category: "colares",
    name: { es: "Cadena Palomita Fina 70cm", pt: "Corrente Pipoca Fina 70cm" },
    desc: {
      es: "Cadena tipo pipoca (popcorn) fina en plata 925, 70cm, ideal para colgantes.",
      pt: "Corrente tipo pipoca fina em prata 925, 70cm, ideal para pingentes."
    },
    cost: 130.90,
    image: "images/productos/Corrente Pipoca Fina - 70cm.webp"
  },
  {
    id: "pingente-flores-envelhecido",
    category: "pingentes",
    name: { es: "Colgante de Flores Envejecido", pt: "Pingente de Flores Envelhecido" },
    desc: {
      es: "Colgante con racimo de flores, tono envejecido.",
      pt: "Pingente com buquê de flores, tom envelhecido."
    },
    cost: 68.90,
    image: "images/productos/Pingente de Flores Envelhecido.webp"
  },
  {
    id: "pingente-pena-onix",
    category: "pingentes",
    name: { es: "Colgante de Pluma con Ónix Resinado", pt: "Pingente de Pena Trabalhada com Pedra Ônix Resinada" },
    desc: {
      es: "Colgante de pluma trabajada con piedra ónix resinada, tono envejecido.",
      pt: "Pingente de pena trabalhada com pedra ônix resinada, tom envelhecido."
    },
    cost: 42.40,
    image: "images/productos/Pingente de Pena Trabalhada com Pedra Ônix Resinada.webp"
  },
  {
    id: "pingente-coracao-riscado",
    category: "pingentes",
    name: { es: "Colgante Corazón Rayado", pt: "Pingente Coração Riscado" },
    desc: {
      es: "Colgante de corazón con textura rayada, tono blanco.",
      pt: "Pingente de coração com textura riscada, tom branco."
    },
    cost: 51.90,
    image: "images/productos/Pingente Coração Riscado.webp"
  },
  {
    id: "pingente-plaquinha-amar-cuidar",
    category: "pingentes",
    name: { es: 'Colgante Placa "Amar y Cuidar"', pt: 'Pingente de Plaquinha "Amar e Cuidar"' },
    desc: {
      es: "Colgante placa grabada 'Amar y Cuidar', tono envejecido.",
      pt: "Pingente de plaquinha gravada 'Amar e Cuidar', tom envelhecido."
    },
    cost: 50.30,
    image: "images/productos/Pingente de Plaquinha _Amar e Cuidar.webp"
  },
  {
    id: "pingente-flor-vazada-pedra-lua",
    category: "pingentes",
    name: { es: "Colgante de Flor Calada con Piedra de Luna", pt: "Pingente de Flor Vazada com Pedra da Lua" },
    desc: {
      es: "Colgante de flor calada con piedra de luna natural, tono blanco.",
      pt: "Pingente de flor vazada com pedra da lua natural, tom branco."
    },
    cost: 50.05,
    image: "images/productos/Pingente de Flor Vazada com Pedra da Lua.webp"
  },
  {
    id: "pingente-plaquinha-amor",
    category: "pingentes",
    name: { es: 'Colgante Placa "Amor"', pt: 'Pingente de Plaquinha "Amor"' },
    desc: {
      es: "Colgante placa grabada 'Amor', tono envejecido.",
      pt: "Pingente de plaquinha gravada 'Amor', tom envelhecido."
    },
    cost: 38.60,
    image: "images/productos/Pingente de Plaquinha _Amor.webp"
  },
  {
    id: "anel-aro-triplo-trancado",
    category: "aneis",
    name: { es: "Anillo Aro Triple Trenzado y Liso", pt: "Anel Aro Triplo Trançado e Liso Envelhecido" },
    desc: {
      es: "Anillo de tres aros, trenzado y liso combinados, tono envejecido.",
      pt: "Anel de três aros, trançado e liso combinados, tom envelhecido."
    },
    cost: 80.60,
    image: "images/productos/Anel Aro Triplo Trançado e Liso Envelhecido.webp"
  },
  {
    id: "anel-abaulado-interligado",
    category: "aneis",
    name: { es: "Anillo Abovedado Interligado Ajustable", pt: "Anel Abaulado Interligado Ajustável Liso" },
    desc: {
      es: "Anillo ajustable de aros abovedados interligados, liso, tono blanco.",
      pt: "Anel ajustável de aros abaulados interligados, liso, tom branco."
    },
    cost: 108.90,
    image: "images/productos/Anel Abaulado Interligado Ajustável Liso.webp"
  },
  {
    id: "anel-ajustavel-liso",
    category: "aneis",
    name: { es: "Anillo Ajustable Liso", pt: "Anel Ajustável Liso" },
    desc: {
      es: "Anillo ajustable liso en plata 925, tono blanco.",
      pt: "Anel ajustável liso em prata 925, tom branco."
    },
    cost: 68.90,
    image: "images/productos/Anel Ajustável Liso.webp"
  },
  {
    id: "anel-ajustavel-aro-abaulado",
    category: "aneis",
    name: { es: "Anillo Ajustable Aro Abovedado y Liso", pt: "Anel Ajustável Aro Abaulado e Liso" },
    desc: {
      es: "Anillo ajustable de aro abovedado combinado con aro liso, tono blanco.",
      pt: "Anel ajustável de aro abaulado combinado com aro liso, tom branco."
    },
    cost: 120.60,
    image: "images/productos/Anel Ajustável Aro Abaulado e Liso.webp"
  },
  {
    id: "anel-ajustavel-aro-duplo",
    category: "aneis",
    name: { es: "Anillo Ajustable de Aro Doble Liso", pt: "Anel Ajustável de Aro Duplo Liso" },
    desc: {
      es: "Anillo ajustable de doble aro liso, tono blanco.",
      pt: "Anel ajustável de aro duplo liso, tom branco."
    },
    cost: 94.30,
    image: "images/productos/Anel Ajustável de Aro Duplo Liso.webp"
  },
  {
    id: "anel-ajustavel-2-aros",
    category: "aneis",
    name: { es: "Anillo Ajustable 2 Aros Liso", pt: "Anel Ajustável 2 Aros Liso" },
    desc: {
      es: "Anillo ajustable de 2 aros lisos, tono blanco.",
      pt: "Anel ajustável de 2 aros lisos, tom branco."
    },
    cost: 123.90,
    image: "images/productos/Anel Ajustável 2 Aros Liso.webp"
  },
  {
    id: "pulseira-berloques",
    category: "pulseiras",
    name: { es: "Pulsera para Dijes 17cm", pt: "Pulseira para Berloques 17cm" },
    desc: {
      es: "Pulsera base en plata 925 para agregar dijes, 17cm.",
      pt: "Pulseira base em prata 925 para adicionar berloques, 17cm."
    },
    cost: 140.90,
    image: "images/productos/Pulseira para Berloques - 17cm.webp"
  },
  {
    id: "anel-ajustavel-4-aros-v",
    category: "aneis",
    name: { es: "Anillo Ajustable 4 Aros en V", pt: "Anel Ajustável 4 aros em V" },
    desc: {
      es: "Anillo ajustable con 4 aros en forma de V, tono blanco.",
      pt: "Anel ajustável com 4 aros em formato de V, tom branco."
    },
    cost: 163.50,
    images: [
      "images/productos/Anel Ajustável 4 aros em V1.webp",
      "images/productos/Anel Ajustável 4 aros em V2.webp"
    ]
  },
  {
    id: "anel-ajustavel-4-aros-espiral",
    category: "aneis",
    name: { es: "Anillo Ajustable con Cuatro Aros en Espiral", pt: "Anel Ajustável com Quatro Aros em Espiral" },
    desc: {
      es: "Anillo ajustable con cuatro aros dispuestos en espiral, tono blanco.",
      pt: "Anel ajustável com quatro aros dispostos em espiral, tom branco."
    },
    cost: 231.90,
    image: "images/productos/Anel Ajustável com Quatro Aros em Espiral.webp"
  },
  {
    id: "anel-rosas-folhas",
    category: "aneis",
    name: { es: "Anillo con Rosas y Hojas en las Puntas", pt: "Anel com Rosas e Folhas nas Pontas Ajustável Envelhecido" },
    desc: {
      es: "Anillo ajustable con rosas y hojas en las puntas, tono envejecido.",
      pt: "Anel ajustável com rosas e folhas nas pontas, tom envelhecido."
    },
    cost: 46.90,
    image: "images/productos/Anel com Rosas e Folhas nas Pontas Ajustável Envelhecido.webp"
  },
  {
    id: "anel-flor-envelhecido-ajustavel",
    category: "aneis",
    name: { es: "Anillo de Flor Envejecido Ajustable", pt: "Anel de Flor Envelhecido Ajustável" },
    desc: {
      es: "Anillo ajustable con dije de flor, tono envejecido.",
      pt: "Anel ajustável com pingente de flor, tom envelhecido."
    },
    cost: 99.40,
    image: "images/productos/Anel de Flor Envelhecido Ajustável.webp"
  },
  {
    id: "pingente-cauda-sereia",
    category: "pingentes",
    name: { es: "Colgante Cola de Sirena Mediana", pt: "Pingente Cauda de Sereia Média" },
    desc: {
      es: "Colgante con forma de cola de sirena, tamaño mediano, tono blanco.",
      pt: "Pingente em formato de cauda de sereia, tamanho médio, tom branco."
    },
    cost: 105.80,
    image: "images/productos/Pingente Cauda de Sereia Média.webp"
  },
  {
    id: "bracelete-oval-fecho",
    category: "pulseiras",
    name: { es: "Brazalete Ovalado con Cierre", pt: "Bracelete Oval com Fecho" },
    desc: {
      es: "Brazalete rígido ovalado en plata 925 con cierre, tono blanco.",
      pt: "Bracelete rígido oval em prata 925 com fecho, tom branco."
    },
    cost: 31.60,
    images: [
      "images/productos/Bracelete Oval com Fecho1.webp",
      "images/productos/Bracelete Oval com Fecho2.webp"
    ]
  },
  {
    id: "bracelete-liso-fecho",
    category: "pulseiras",
    name: { es: "Brazalete Liso con Cierre", pt: "Bracelete Liso com Fecho" },
    desc: {
      es: "Brazalete rígido liso en plata 925 con cierre.",
      pt: "Bracelete rígido liso em prata 925 com fecho."
    },
    cost: 54.50,
    image: "images/productos/Bracelete Liso com Fecho.webp"
  },
  {
    id: "bracelete-ajustavel-palitos-centro",
    category: "pulseiras",
    name: { es: "Brazalete Ajustable Liso con Líneas al Centro", pt: "Bracelete Ajustável Aro Liso com Palitos no Centro" },
    desc: {
      es: "Brazalete ajustable liso con detalle de líneas al centro, tono blanco.",
      pt: "Bracelete ajustável liso com detalhe de palitos no centro, tom branco."
    },
    cost: 35.80,
    image: "images/productos/Bracelete Ajustável Aro Liso com Palitos no Centro.webp"
  },
  {
    id: "anel-ajustavel-dois-palitos",
    category: "aneis",
    name: { es: "Anillo Ajustable Liso con Dos Líneas", pt: "Anel Ajustável Liso com Dois Palitos" },
    desc: {
      es: "Anillo ajustable liso con detalle de dos líneas, tono blanco.",
      pt: "Anel ajustável liso com detalhe de dois palitos, tom branco."
    },
    cost: 71.70,
    image: "images/productos/Anel Ajustável Liso com Dois Palitos.webp"
  },
  {
    id: "anel-dois-aros-v-liso-trabalhado",
    category: "aneis",
    name: { es: "Anillo Dos Aros en V, Liso y Trabajado", pt: "Anel com Dois Aros em V Sendo um Liso e Outro Trabalhado Ajustável" },
    desc: {
      es: "Anillo ajustable con dos aros en V, uno liso y otro trabajado, tono envejecido.",
      pt: "Anel ajustável com dois aros em V, um liso e outro trabalhado, tom envelhecido."
    },
    cost: 58.40,
    image: "images/productos/Anel com Dois Aros em V Sendo um Liso e Outro Trabalhado Ajustável.webp"
  },
  {
    id: "anel-dois-aros-corda",
    category: "aneis",
    name: { es: "Anillo Dos Aros Lisos y Uno con Detalle de Cuerda", pt: "Anel com Dois Aros Lisos e Um Aro com Detalhe de Corda Ajustável" },
    desc: {
      es: "Anillo ajustable con dos aros lisos y uno con detalle de cuerda, tono blanco.",
      pt: "Anel ajustável com dois aros lisos e um aro com detalhe de corda, tom branco."
    },
    cost: 89.50,
    image: "images/productos/Anel com Dois Aros Lisos e Um Aro com Detalhe de Corda Ajustável.webp"
  },
  {
    id: "anel-ajustavel-dois-aros-curvos",
    category: "aneis",
    name: { es: "Anillo Ajustable con Dos Aros Curvos", pt: "Anel Ajustável com Dois Aros Curvos" },
    desc: {
      es: "Anillo ajustable con dos aros curvos entrelazados, tono blanco.",
      pt: "Anel ajustável com dois aros curvos entrelaçados, tom branco."
    },
    cost: 110.60,
    image: "images/productos/Anel Ajustável com Dois Aros Curvos.webp"
  },
  {
    id: "anel-4-aros-assimetricos",
    category: "aneis",
    name: { es: "Anillo con 4 Aros Asimétricos Abovedados", pt: "Anel com 4 Aros Assimétricos Abaulados Ajustável" },
    desc: {
      es: "Anillo ajustable con 4 aros asimétricos abovedados, tono blanco.",
      pt: "Anel ajustável com 4 aros assimétricos abaulados, tom branco."
    },
    cost: 130.40,
    image: "images/productos/Anel com 4 Aros Assimétricos Abaulados Ajustável.webp"
  },
  {
    id: "bracelete-branco-liso-aberto",
    category: "pulseiras",
    name: { es: "Brazalete Blanco Liso Abierto Ajustable", pt: "Bracelete Branco Liso Aberto Ajustável" },
    desc: {
      es: "Brazalete liso abierto y ajustable, tono blanco.",
      pt: "Bracelete liso aberto e ajustável, tom branco."
    },
    cost: 37.18,
    image: "images/productos/Bracelete Branco Liso Aberto Ajustável.webp"
  },
  {
    id: "brinco-agua-marinha-quadrangular",
    category: "brincos",
    name: { es: "Arete en Agua Marina Cuadrangular", pt: "Brinco em Água Marinha Quadrangular" },
    desc: {
      es: "Arete con piedra agua marina de corte cuadrangular, tono blanco.",
      pt: "Brinco com pedra água marinha de corte quadrangular, tom branco."
    },
    cost: 22.60,
    image: "images/productos/Brinco em Água Marinha Quadrangular.webp"
  },
  {
    id: "trio-brincos-argola-hexagono",
    category: "brincos",
    name: { es: "Trío de Aretes Aro Hexágono", pt: "Trio de Brincos de Argola Hexágono" },
    desc: {
      es: "Set de 3 aretes tipo aro hexágono, tono blanco.",
      pt: "Conjunto de 3 brincos tipo argola hexágono, tom branco."
    },
    cost: 27.60,
    image: "images/productos/Trio de Brincos de Argola Hexágono.webp"
  },
  {
    id: "brinco-trabalhado-flor",
    category: "brincos",
    name: { es: "Arete Trabajado de Flor", pt: "Brinco Trabalhado de Flor" },
    desc: {
      es: "Arete con acabado trabajado en forma de flor, tono envejecido.",
      pt: "Brinco com acabamento trabalhado em formato de flor, tom envelhecido."
    },
    cost: 48.90,
    image: "images/productos/Brinco Trabalhado de Flor.webp"
  },
  {
    id: "brinco-beija-flor",
    category: "brincos",
    name: { es: "Arete de Colibrí", pt: "Brinco de Beija Flor" },
    desc: {
      es: "Arete con forma de colibrí, tono envejecido.",
      pt: "Brinco em formato de beija-flor, tom envelhecido."
    },
    cost: 36.90,
    image: "images/productos/Brinco de Beija Flor.webp"
  },
  {
    id: "brinco-tartaruga-trabalhado",
    category: "brincos",
    name: { es: "Arete de Tortuga Trabajado", pt: "Brinco de Tartaruga Trabalhado" },
    desc: {
      es: "Arete con forma de tortuga y acabado trabajado, tono envejecido.",
      pt: "Brinco em formato de tartaruga com acabamento trabalhado, tom envelhecido."
    },
    cost: 95.60,
    image: "images/productos/Brinco de Tartaruga Trabalhado.webp"
  },
  {
    id: "brinco-argola-fio-zirconias",
    category: "brincos",
    name: { es: "Arete Aro con Hilo de Circonias Blancas", pt: "Brinco de Argola com Fio de Zircônias Brancas" },
    desc: {
      es: "Arete tipo aro con hilo de circonias blancas, tono blanco.",
      pt: "Brinco tipo argola com fio de zircônias brancas, tom branco."
    },
    cost: 110.60,
    image: "images/productos/Brinco de Argola com Fio de Zircônias Brancas.webp"
  },
  {
    id: "piercing-cartilagem-zirconias",
    category: "brincos",
    name: { es: "Piercing de Cartílago Engastado con Circonias", pt: "Piercing de Cartilagem Cravejado com Zircônias" },
    desc: {
      es: "Piercing de presión para cartílago engastado con circonias, tono blanco.",
      pt: "Piercing de pressão para cartilagem cravejado com zircônias, tom branco."
    },
    cost: 24.50,
    image: "images/productos/Piercing de Cartilagem Cravejado com Zircônias.webp"
  },
  {
    id: "brinco-pequeno-elefante",
    category: "brincos",
    name: { es: "Arete Pequeño de Elefante", pt: "Brinco Pequeno de Elefante" },
    desc: {
      es: "Arete pequeño con forma de elefante, tono envejecido.",
      pt: "Brinco pequeno em formato de elefante, tom envelhecido."
    },
    cost: 45.70,
    image: "images/productos/Brinco Pequeno de Elefante.webp"
  },
  {
    id: "berloque-tartaruga-casco-vazado",
    category: "pingentes",
    name: { es: "Dije de Tortuga Envejecido con Caparazón Calado", pt: "Berloque Envelhecido de Tartaruga com Casco Vazado" },
    desc: {
      es: "Dije/berloque de tortuga con caparazón calado, tono envejecido.",
      pt: "Berloque de tartaruga com casco vazado, tom envelhecido."
    },
    cost: 45.90,
    images: [
      "images/productos/Berloque Envelhecido de Tartaruga com Casco Vazado1.webp",
      "images/productos/Berloque Envelhecido de Tartaruga com Casco Vazado2.webp"
    ]
  },
  {
    id: "piercing-pressao-bolinha-trancados",
    category: "brincos",
    name: { es: "Piercing de Presión Envejecido con Bolita y Trenzados", pt: "Piercing de Pressão Envelhecido com Bolinha e Trançados" },
    desc: {
      es: "Piercing de presión con bolita y detalles trenzados, tono envejecido.",
      pt: "Piercing de pressão com bolinha e detalhes trançados, tom envelhecido."
    },
    cost: 24.60,
    image: "images/productos/Piercing de Pressão Envelhecido com Bolinha e Trançados.webp"
  },
  {
    id: "piercing-pressao-sereia",
    category: "brincos",
    name: { es: "Piercing de Presión Envejecido con Sirena", pt: "Piercing de Pressão Envelhecido com Sereia" },
    desc: {
      es: "Piercing de presión con dije de sirena, tono envejecido.",
      pt: "Piercing de pressão com pingente de sereia, tom envelhecido."
    },
    cost: 45.90,
    images: [
      "images/productos/Piercing de Pressão Envelhecido com Sereia1.webp",
      "images/productos/Piercing de Pressão Envelhecido com Sereia2.webp"
    ]
  },

  /* ===== Línea Tartaruga ===== */
  {
    id: "presente-pingente-relicario-coracao",
    category: "pingentes",
    name: { es: "Colgante Relicario Corazón", pt: "Presente Pingente Relicário Coração" },
    desc: {
      es: "Colgante relicario en forma de corazón, ideal para regalo.",
      pt: "Pingente relicário em formato de coração, ideal para presente."
    },
    cost: 111.89,
    images: [
      "images/productos/tartaruga/PRESENTE PINGENTE RELICÁRIO CORAÇÃO1.webp",
      "images/productos/tartaruga/PRESENTE PINGENTE RELICÁRIO CORAÇÃO2.webp"
    ]
  },
  {
    id: "corrente-lacraia",
    category: "colares",
    name: { es: "Cadena Lacraia", pt: "Corrente Lacraia" },
    desc: {
      es: "Cadena estilo lacraia en plata, tono blanco.",
      pt: "Corrente estilo lacraia em prata, tom branco."
    },
    cost: 115.94,
    image: "images/productos/tartaruga/CORRENTE LACRAIA.webp"
  },
  {
    id: "colar-meia-lua-lisa-g",
    category: "colares",
    name: { es: "Collar Media Luna Lisa G", pt: "Colar Meia Lua Lisa G" },
    desc: {
      es: "Collar con dije de media luna lisa, tamaño grande.",
      pt: "Colar com pingente de meia lua lisa, tamanho grande."
    },
    cost: 76.10,
    image: "images/productos/tartaruga/COLAR MEIA LUA LISA G.webp"
  },
  {
    id: "bracelete-borboleta-ajustavel",
    category: "pulseiras",
    name: { es: "Brazalete Mariposa Ajustable Liso", pt: "Bracelete Borboleta Ajustável Liso" },
    desc: {
      es: "Brazalete ajustable liso con dije de mariposa.",
      pt: "Bracelete ajustável liso com pingente de borboleta."
    },
    cost: 55.36,
    image: "images/productos/tartaruga/BRACELETE BORBOLETA AJUSTÁVEL LISO.webp"
  },
  {
    id: "pingente-estrela-mar-pedra-natural",
    category: "pingentes",
    name: { es: "Colgante Estrella de Mar con Piedra Natural", pt: "Pingente Estrela do Mar com Pedra Natural" },
    desc: {
      es: "Colgante de estrella de mar con piedra natural, disponible en abalone o nácar.",
      pt: "Pingente de estrela do mar com pedra natural, disponível em abalone ou madrepérola."
    },
    cost: 58.14,
    image: "images/productos/tartaruga/PINGENTE ESTRELA DO MAR COM PEDRA NATURAL.webp"
  },
  {
    id: "anel-estrela-pedra-natural-envelhecido",
    category: "aneis",
    name: { es: "Anillo Estrella con Piedra Natural Envejecido", pt: "Anel Estrela com Pedra Natural Envelhecido" },
    desc: {
      es: "Anillo con dije de estrella y piedra natural abalone, tono envejecido, talla 19.",
      pt: "Anel com pingente de estrela e pedra natural abalone, tom envelhecido, tamanho 19."
    },
    cost: 96.07,
    image: "images/productos/tartaruga/ANEL ESTRELA COM PEDRA NATURAL ENVELHECIDO.webp"
  },
  {
    id: "pingente-lua-crescente-arvore-vida",
    category: "pingentes",
    name: { es: "Colgante Luna Creciente con Árbol de la Vida", pt: "Pingente Lua Crescente com Árvore da Vida" },
    desc: {
      es: "Colgante de luna creciente con árbol de la vida y piedra abalone.",
      pt: "Pingente de lua crescente com árvore da vida e pedra abalone."
    },
    cost: 137.57,
    image: "images/productos/tartaruga/PINGENTE LUA CRESCENTE COM ÁRVORE DA VIDA.webp"
  },
  {
    id: "pingente-dupla-face-pedra-natural",
    category: "pingentes",
    name: { es: "Colgante Doble Cara con Piedra Natural", pt: "Pingente Dupla Face Pedra Natural" },
    desc: {
      es: "Colgante doble cara con piedra natural.",
      pt: "Pingente dupla face com pedra natural."
    },
    cost: 49.25,
    image: "images/productos/tartaruga/PINGENTE DUPLA FACE PEDRA NATURAL.webp"
  },
  {
    id: "pingente-flor-envelhecida",
    category: "pingentes",
    name: { es: "Colgante Flor Envejecida", pt: "Pingente Flor Envelhecida" },
    desc: {
      es: "Colgante con forma de flor, tono envejecido.",
      pt: "Pingente em formato de flor, tom envelhecido."
    },
    cost: 31.12,
    image: "images/productos/tartaruga/PINGENTE FLOR ENVELHECIDA.webp"
  },
  {
    id: "pingente-filtro-sonhos-azul",
    category: "pingentes",
    name: { es: "Colgante Atrapasueños Piedra Azul con Dos Plumas", pt: "Pingente Filtro dos Sonhos Pedra Azul com Duas Penas" },
    desc: {
      es: "Colgante atrapasueños con piedra azul y dos plumas colgantes.",
      pt: "Pingente filtro dos sonhos com pedra azul e duas penas pendentes."
    },
    cost: 40.36,
    image: "images/productos/tartaruga/PINGENTE FILTRO DOS SONHOS PEDRA AZUL COM DUAS PENAS.webp"
  },
  {
    id: "pingente-sol-e-lua",
    category: "pingentes",
    name: { es: "Colgante Sol y Luna", pt: "Pingente Sol e Lua" },
    desc: {
      es: "Colgante de sol y luna con piedra abalone.",
      pt: "Pingente de sol e lua com pedra abalone."
    },
    cost: 112.01,
    image: "images/productos/tartaruga/PINGENTE SOL E LUA.webp"
  },
  {
    id: "pingente-flor-envelhecida-talho",
    category: "pingentes",
    name: { es: "Colgante Flor Envejecida Tallada", pt: "Pingente Flor Envelhecida com Talho" },
    desc: {
      es: "Colgante con forma de flor tallada, tono envejecido, con nácar.",
      pt: "Pingente em formato de flor com talho, tom envelhecido, com madrepérola."
    },
    cost: 43.78,
    image: "images/productos/tartaruga/PINGENTE FLOR ENVELHECIDA com talho.webp"
  },
  {
    id: "anel-pedra-g-natural-envelhecido",
    category: "aneis",
    name: { es: "Anillo con Piedra G Natural Envejecido", pt: "Anel com Pedra G Natural Envelhecido" },
    desc: {
      es: "Anillo con piedra natural grande y nácar, tono envejecido, talla 17.",
      pt: "Anel com pedra natural grande e madrepérola, tom envelhecido, tamanho 17."
    },
    cost: 138.47,
    image: "images/productos/tartaruga/ANEL COM PEDRA G NATURAL ENVELHECIDO.webp"
  },
  {
    id: "anel-abaloado-pedra-natural-bolinha",
    category: "aneis",
    name: { es: "Anillo Abovedado con Piedra Natural y Bolita", pt: "Anel Abaloado com Pedra Natural e Bolinha em Outra Ponta" },
    desc: {
      es: "Anillo abovedado con piedra natural en un extremo y bolita en el otro, talla 18.",
      pt: "Anel abaulado com pedra natural em uma ponta e bolinha em outra, tamanho 18."
    },
    cost: 36.27,
    image: "images/productos/tartaruga/ANEL ABALOADO COM PEDRA NATURAL E BOLINHA EM OUTRA PONTA.webp"
  },
  {
    id: "colar-lua-abalone-p",
    category: "colares",
    name: { es: "Collar Luna Abalone P", pt: "Colar Lua Abalone P" },
    desc: {
      es: "Collar con dije de luna y piedra abalone, tamaño pequeño.",
      pt: "Colar com pingente de lua e pedra abalone, tamanho pequeno."
    },
    cost: 106.10,
    image: "images/productos/tartaruga/COLAR LUA ABALONE P.webp"
  },
  {
    id: "brinco-gancho-circulo-vazado-estrela-mar",
    category: "brincos",
    name: { es: "Arete Gancho Círculo Calado con Estrella de Mar", pt: "Brinco Gancho Círculo Vazado com Estrela do Mar" },
    desc: {
      es: "Arete de gancho con círculo calado y dije de estrella de mar.",
      pt: "Brinco de gancho com círculo vazado e pingente de estrela do mar."
    },
    cost: 65.49,
    image: "images/productos/tartaruga/BRINCO GANCHO CÍRCULO VAZADO COM ESTRELA DO MAR.webp"
  },
  {
    id: "brinco-flor-envelhecida-p",
    category: "brincos",
    name: { es: "Arete Flor Envejecida P", pt: "Brinco Flor Envelhecida P" },
    desc: {
      es: "Arete con forma de flor, tamaño pequeño, tono envejecido.",
      pt: "Brinco em formato de flor, tamanho pequeno, tom envelhecido."
    },
    cost: 77.72,
    image: "images/productos/tartaruga/BRINCO FLOR ENVELHECIDA P.webp"
  },
  {
    id: "brinco-tartaruga-pedra-natural",
    category: "brincos",
    name: { es: "Arete de Tortuga con Piedra Natural", pt: "Brinco Tartaruga Pedra Natural" },
    desc: {
      es: "Arete con forma de tortuga y piedra natural abalone.",
      pt: "Brinco em formato de tartaruga com pedra natural abalone."
    },
    cost: 51.56,
    image: "images/productos/tartaruga/BRINCO TARTARUGA PEDRA NATURAL.webp"
  },
  {
    id: "brinco-gancho-gota-pedra-natural-trabalhada",
    category: "brincos",
    name: { es: "Arete Gancho Gota Piedra Natural Trabajada", pt: "Brinco Gancho Gota Pedra Natural Trabalhada" },
    desc: {
      es: "Arete de gancho tipo gota con piedra natural trabajada.",
      pt: "Brinco de gancho tipo gota com pedra natural trabalhada."
    },
    cost: 43.95,
    image: "images/productos/tartaruga/BRINCO GANCHO GOTA PEDRA NATURAL TRABALHADA.webp"
  },
  {
    id: "brinco-lua",
    category: "brincos",
    name: { es: "Arete Luna", pt: "Brinco Lua" },
    desc: {
      es: "Arete con forma de luna y piedra abalone.",
      pt: "Brinco em formato de lua com pedra abalone."
    },
    cost: 53.78,
    image: "images/productos/tartaruga/BRINCO LUA.webp"
  },
  {
    id: "conjunto-libelula-cravejada",
    category: "colares",
    name: { es: "Conjunto Libélula Engastada", pt: "Conjunto Libélula Cravejada" },
    desc: {
      es: "Conjunto con dije de libélula engastada, cadena V12 45cm.",
      pt: "Conjunto com pingente de libélula cravejada, corrente V12 45cm."
    },
    cost: 92.55,
    image: "images/productos/tartaruga/CONJUNTO LIBELULA CRAVEJADA.webp"
  }
];

/* Ícono decorativo por categoría, usado como reemplazo mientras no haya foto real. */
const CATEGORY_ICONS = {
  aneis: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="placeholder-icon">
    <circle cx="32" cy="38" r="16" stroke="currentColor" stroke-width="2.5"/>
    <path d="M24 24 L32 8 L40 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  brincos: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="placeholder-icon">
    <circle cx="32" cy="14" r="6" stroke="currentColor" stroke-width="2.5"/>
    <path d="M32 20 V34" stroke="currentColor" stroke-width="2.5"/>
    <circle cx="32" cy="44" r="10" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,
  colares: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="placeholder-icon">
    <path d="M12 14 C12 34 52 34 52 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="42" r="9" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,
  pulseiras: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="placeholder-icon">
    <ellipse cx="32" cy="32" rx="22" ry="14" stroke="currentColor" stroke-width="2.5"/>
    <circle cx="32" cy="18" r="3.5" fill="currentColor"/>
  </svg>`,
  pingentes: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="placeholder-icon">
    <circle cx="32" cy="12" r="5" stroke="currentColor" stroke-width="2.5"/>
    <path d="M32 17 V28" stroke="currentColor" stroke-width="2.5"/>
    <path d="M20 28 H44 L38 50 L26 50 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`
};
