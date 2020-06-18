const preguntas = [
    "Ante una señal de Ceda el Paso el Conductor deberá...",
    "El permiso de conducir es una autorización que otorga la autoridad departamental y puede ser retirada con causa justificada",
    "Todo vehículo automotor y los acoplados remolcados por el mismo que circulen por las vías de tránsito, deberán ser objeto de un contrato de seguro de responsabilidad civil por daños a terceros con la cobertura que determina la ley",
    "¿Para qué sirve la luz de posición?",
    "En caso de siniestro de tránsito, usted debe:",
    "Principio de cooperación en el tránsito es: Comportarse conforme a las reglas y actuar en la vía armónicamente, de manera de coordinar las acciones propias con la de los otros usuarios para no provocar conflictos, perturbaciones, ni siniestros, y en definitiva, compartir la vía pública en forma pacífica y ordenada",
    "Existiendo acera transitable: ¿Los peatones pueden ir caminando por la calzada?",
    "Señala  cuál de estos elementos de seguridad pasiva y reduce los daños que se pueden producir cuando ocurre un siniestro:",
    "Los sistemas de seguridad podemos dividirlos en dos grandes grupos: seguirdad activa y seguridad pasiva. ¿Cuál de los siguientes sistemas mencionado actúan antes de una colisión?",
    "El uso del celular mientras conduces reduce nuestra capacidad de atención",
    "¿Cuál es la función del apoya cabezas?",
    "El conductor del vehículo, en una calzada de doble sentido de de circulación, no podrá adelantar a otro vehículo cuando:",
    "Si usted conduce un vehículo y observa a un Agente de Tránsito de perfil:",
    "Con niebla, se deben apagar las luces cortas porque afectan la visibilidad a mediana distancia. Ud. considera esta afirmación como:",
    "Los automotores deberán contar con un par de luces delantera de posición de color amarillas o blancas, y en su parte trasera con un par de color rojo. Las motocicletas están obligadas a llevar una luz de posición roja en su parte trasera",
    "¿Se puede circular con escape sin silenciador?",
    "Circula conduciendo detras de un vehículo el cual a indicado la intención de detenerse, Ud. desea adelantarlo, ¿le está permitido hacerlo por el carril derecho si está libre?",
    "¿Debe tener seguro obligatorio un ciclomotor?",
    "El hidroplaneamiento o Aquaplanning es un fenómeno que se produce cuando:",
    "Al circula con nuestro vehículo lo haremos por el carril:",
    "¿Es recomendable para el peatón llevar chaleco reflectante si circula de noche?",
    "Si quien conduce lo hace a 40Km/h y necesita una frenada de emergencia, la distancia total de la detención se realizará una vez recorridos 20 metros. Si circula a 80Km/h, la distancia total de detención será:",
    "El estrés hace que el conductor...",
    "La baja presión en los neumáticos provoca una flexión externa de estos, lo cual genera calor, con el riesgo que estalle. También causa un desgaste desparejo de la banda de rodamiento",
    "¿Debe estar matriculado un ciclomotor?",

    "La principal causa de siniestros viales es debido al...",
    "La siguiente afirmación:La mezcla de medicamentos con alcohol siempre es peligrosa y debe ser evitada, es: ",
    "La persona que ha tomado alcohol...",
    "Que acción debe tomar Ud al momento que percibe que va ha hacer adelantado...",
    "Los vehículos deberán llevar elementos de seguridad como matafuego, balizazs, y dispositivos reflectantes independientes para casos de emergencia.",
    "De día, en condiciones meteorológicas adversas, ¿que luces deberemos de llevar puestas?",
    "¿Puede provocar fatiga conducir con lluvia o en situaciones climatológicas adversas?",
    "Circula conduciendo detrás de un vehículo el cual ha indicado intención de girar a la izquierda Ud. Desea adelantarlo: ¿le está permitido hacerlo por el carril que está libre?",
    "La conducción de un vehículo en forma segura puede verse afectada por diferentes afecciones:",
    "¿Qué deberá hacer un conductor al iniciar un giro a la izquierda desde una calle de doble mano?",
    "Antes de empezar a pasar al vehículo que va delante de usted deberá:",
    "Se puede adelantar a un vehículo que está doblando a la derecha",
    "Adelantamiento correcto es una maniobra realizada:",
    "Un conductor al enfrentar una señal de “ceda el paso” deberá:",
    "Un cruce regulado:",
    "¿En qué circunstancias puede un vehículo circular por la banquina de una ruta?",
    "Según la tabla de valores de alcoholemia o similares en términos de espirometría, el valor 0.8 g/l de alcohol en sangre indica: La motricidad no se ve afectada",
    "La velocidad inadecuada y el consumo de alcohol...",
    "Todo vehículo automotor, para transitar por la vía pública deberá poseer obligatoriamente un extintor",
    "¿Puede eventualmente detenerse un automóvil en la banquina de una ruta?",
    "Por definición de vía se entiende:",
    "¿Una mujer embarazada está exenta de colocarse el cinturón de seguridad?",
    "Si la primera a la izquierda es amarilla continua, en el eje de la calzada, significa que:",
    "Todo vehículo empadronado deberá llevar en su parte trasera, una luz blanca que ilumine la matrícula",
    "En caso de querer conducir una persona discapacitada deberá",
    "El apoyacabezas debe quedar a la altura de...",
    "Puede usted, ¿estacionar su vehículo en doble fila?",
    "Los vehículos que no cumplan con las leyes y no ofrezcan la debida seguridad de tránsito, podrán ser retirados de la circulación por la autoridad competente",
    "Si usted viaja como pasajero en una moto, ¿debe llevar el casco abrochado?",
    "¿Se pueden efectuar competiciones en la vía pública, sin autorización de la autoridad competente?",
    "¿Hay medicamentos que pueden afectar el tiempo de reacción?",
    "El alcohol al momento de conducir un vehículo:",
    "Cuando los neumáticos poseen menor presión de aire que la sugerida, las consecuencias son:",
    "Analice esta afirmación: Al aproximarse a un cruce de caminos, una bifurcación, un empalme de carreteras o paso a nivel el conductor deberá tomar precauciones especiales a fin de evitar  siniestro",
    "Todo vehículo automotor y los acoplados remolcados por el mismo que circulen por las vías de tránsito, deberán ser objeto de un contrato de seguro mínimo de responsabilidad civil por daños a terceros",
    "Para disminuir considerablemente la velocidad, salvo el caso de frenado brusco por peligro inminente, y siempre que sea necesario, se colocará el brazo y mano extendidos fuera del vehículo y hacia abajo",
    "Las luces cortas o bajas, ¿pueden encandilar a quienes circulan de frente en algún caso?",
    "Un conductor al enfrentarse a una señal de PARE debe:",
    "La preferencia de paso del vehículo de la derecha no regirá:",
    "¿Cuál es la edad mínima para poder viajar en el asiento delantero del vehículo?",
    " Cuando va detrás de un vehículo durante la noche deben usarse las luces cortas",
    "Las luces altas ¿deben sustituirse por las de alcance medio cuando hay riesgo de encandilamiento?",
    "Ante la proximidad de un vehículo de emergencia usted:",
    "¿Se puede adelantar a un vehículo que está dando paso a peatones?",
    "Cruce peatonal es:",
    "El peatón: ¿tiene preferencia de cruce en cualquier lugar de la calzada?",
    "Los peatones que circulan por la vereda tienen preferencia de paso ante un vehículo que la atraviesa para entrar o salir de un garaje",
    "Al reventarse una neumático se debe:",
    "Ante irregularidades en la documentación o estado del vehículo este puede ser detenido por funcionario de tránsito igual que la documentación (del conductor y del vehículo) previa entrega del recibo pertinente",
    "Los funcionarios del cuerpo de inspectores de tránsito, están facultados para modificar las preferencias establecidas cuando las circunstancias lo requieran:",
    "Usted puede circular sin espejo retrovisor cuando circule a baja velocidad",
    "La distancia prudencial entre dos vehículos que circulan en la misma dirección en carretera es aquella que permite ver al conductor las ruedas traseras del vehículo que va adelante",
    "Un disgusto (altercados, discusiones, depresión, etc.) afecta:",
    "Si su vehículo comienza a patinar al momento de frenar",
    "Con el coche cargado:",
    "En un repecho se puede adelantar a otro vehículo",
    "En cruces donde los semáforos se encuentren apagados o descompuestos, la preferencia será de:",
    "Los vehículos que tienen sus neumáticos con bandas de rodamiento gastadas (menos de 2 mm de profundidad)",
    "Aun tomando descansos, no se deberá conducir por más de 9 horas contínuas",
    "Para enfrentarse a futuras emergencias un conductor prudente debe tener en su vehículo:",
    "¿Cuál es la distancia mínima de seguridad que usted debe mantener con respecto al vehículo que circula delante?",
    "Si usted debe estacionar en bajada",
    "Por norma general, ¿usted deberá circular por la izquierda de la calzada?",
    "Cuando llueve",
    "Por norma general usted deberá circular por el eje de calzada, salvo que transiten otros vehículos",
    "Cuando usted dobla a la derecha:",
    ];

const respuestas = [
    ["Reducir la velocidad, detenerse si es necesario y permitir el paso a los usuarios que se aproximen a la intersección por la otra vía", "Continuar la marcha", "Disminuir la marcha y solo dar preferencia a los vehículos que aparezcan por la derecha", "Detener el vehículo inmediatamente"],
    ["Verdadero", "Falso"],
    ["Verdadero", "Falso"],
    ["Para indicar la presencia, altura y ancho del vehículo", "Solamente, para indicar el ancho total del vehículo", "Para mejorar el alumbrado de la carretera"],
    ["Ninguna es correcta", "Si es motociclista quitar el casco para ver lesiones", "Ayudarlo a incorporarse y que camine para verificar que no tiene daños", "Primero dar de beber al lesionado"],
    ["Verdadero", "Falso"],
    ["En desacuerdo, los peatones deberán circular por las aceras, sin utilizar la calle ni provocar molestias o transtornos a los demás usuarios", "Solo cuando llueve", "Totalmente de acuerdo"],
    ["Cinturones de seguridad", "Luces", "Neumáticos"],
    ["Neumáticos", "Cinturón", "Sistema de retención infantil", "Casco"],
    ["Verdadero", "Falso"],
    ["Evitar lesiones cervicales", "Evitar lesiones de cabeza", "Evitar fatiga"],
    ["Todas son correctas", "Se apoximen a un paso a nivel o lo atraviesen", "Acceda a una intersección", "La señalización así lo determine"],
    ["Puede continuar la marcha", "Debe doblar a la izquieda o a la derecha", "Debe detener la marcha", "Debe detenerse ya que indica detención de todo el tránsito"],
    ["Inválida, ya que las luces cortas deben utilizarse de forma permanente", "Válida, porque deben encenderse las luces largas para una mayor visión", "Válida, porque la mejor luz es la de posición para esa cirunstancia climática"],
    ["Verdadero", "Falso"],
    ["No", "Si"],
    ["Si", "No"],
    ["Si","No"],
    ["Ambas son correctas", "Ninguna es correcta", "Circula a exceso de velocidad y sobre pavimento mojado", "Cuando el dibujo de los neumáticos no puede desalojar el agua de la calzada"],
    ["De la derecha como norma general", "Que más convenga por mi destino", "Mas al centro posible, para permitir la entrada a los que vienen por la derecha"],
    ["Si, aumenta la visibilidad sobre el peatón", "No es necesario"],
    ["Mayor", "Menor", "Igual"],
    ["Sea más hostil con los demás usuarios", "Asuma menos riesgos", "Respete más la señalización"],
    ["Solo en caso de emergencia, La banquina no es un lugar de circulación", "Cuando circule a velocidad muy lenta", "Cuando hubiera mucho tránsito sobre la ruta"],
    ["Falso", "Verdadero"],
    ["Son factores de riesgo en siniestralidad vial", "No son causas de siniestros de tránsito, pero si laborales", "Pocas veces provocan siniestros en general. Depende de cada persona"],
    ["Verdadero", "Falso"],
    ["Si", "No"],
    ["Es la carretera, camino o calle abierta a la circulación pública", "Es la parte donde circulan los vehículos", "Es la parte donde circulan los buses"],
    ["No", "Si"],
    ["Está prohibido adelantar", "Se puede adelantar y/o girar a la izquierda", "Sólo puede adelantar si está en sus curvas"],
    ["Verdadero", "Falso"],
    ["Ambas son correctas", "Solicitar autorización especial", "Tener el vehículo adecuado a su discapacidad"],
    ["Los ojos", "La nariz", "La boca"],
    ["No, en ningún caso", "Sí. Si es solo para una rápida diligencia"],
    ["La afirmación es correcta", "La afirmación es incorrecta"],
    ["Si, y el conductor es responsable de que lo lleve abrochado", "No"],
    ["No, porque está prohibido", "Sí, en un espacio cerrado al tráfico por el vehículo con bandera roja hasta otro con bandera a cuadros", "Sí, siempre que no se molesten  a otros usuarios"],
    ["Si, por eso debe consultar con su médico las especificaciones", "No, no afectan", "Solo si antes hemos ingerido alcohol"],
    ["Aumenta el tiempo de reación", "Aumenta la distancia de frenado", "Disminuye la distancia de detención"],
    ["Se consume mayor cantidad de combustible y existe riesgo de reventón", "Los neumáticos se gastan menos", "Se controla mejor el vehículo", "Se ahorra combustible"],
    ["Es correcto , ya que todo conductor deberá tomar precauciones especiales a fin de evitar cualquier siniestro en las circunstancias descritas", "Es correcto, la afirmación esta basada en la filosofía de agilizar el tránsito"],
    ["La afirmación es correcta totalmente", "La afirmación es incorrecta. Si no tengo dinero no estoy obligado a contratar un seguro de ninguna especie"],
    ["Verdadero", "Falso"],
    ["Verdadero", "Falso"],
    ["Si", "No"],
    ["Sí, si no están correctamente reguladas", "No, eso nunca puede suceder", "Sí, siempre sucede y es normal que ocurra"],
    ["factor humano.", "factor vehículo.", "factor vía."],
    ["Verdadera", "Falsa"],
    [ "subestima sus efectos, como norma general", "normalmente es consciente de sus efectos", "conduce con mas precaución, como norma general "],
    ["mantener o disminuir la velocidad", "indicar con el indicador de dirección derecho, que permite el adelantamiento", "aumentar la velocidad"],
    ["Estoy de acuerdo con la afirmación", "No estoy de acuerdo. Es necesario llevar nada más que la documentación del vehículo"],
    ["Siempre las de posición y las de corto alcance", "Las largas si la niebla es muy espesa", "Ninguna luz es necesaria durante el día"],
    ["Si.", "No."],
    ["Si.", "No."],
    ["Todas son correctas", "Los transtornos emocionales y psiquiátricos", "Enfermedades neurológicas", "Transtornos de sueño"],
    ["Aproximarse a la línea central del eje de la calzada", "Ubicarse del lado izquierdo del eje de la  calzada", "Acercarse lo más a la derecha posible", "Ninguna es correcta"],
    ["Mirar por el espejo retrovisor y prender el señalero", "Colocarse en la senda derecha y prender el señalero", "Tocar bocina", "Hacer cambio de luces"],
    ["Verdadero", "Falso"],
    ["Por el costado izquierdo del vehículo que desea adelantar", " Por la banquina si la hubiera", "Nunca se debe adelantar", "Por el costado derecho del vehículo que desea adelantar"],
    ["Reducir la velocidad y detenerse su fuera necesario", "Acelerar", "Detenerse siempre", "Seguir su marcha a la misma velocidad"],
    ["Es aquel en el que existe semáforos funcionando regularmente un inspector o un agente de tránsito", "Ninguna es correcta", "En el que existe cualquier tipo de señal"],
    ["Detener totalmente la marcha", "Reducir la velocidad y detenerse si fuera necesario", "Reducir un poco la velocidad y continuar","Seguir su marcha a la misma velocidad"],
    ["En los cruces regulados con semáforos o agentes de tránsito", "En los cruces no regulados","En las vias doble tránsito"],
    ["12 años","6 años", "1 año","Ninguna es correcta"],
    ["Cuando la distancia haga innecesarias las luces largas", "En ningún momento", "Cuando la visibilidad sea muy buena", "Ninguna es correcta"],
    ["Si", "No"],
    ["Despeja rápidamente la calzada permaneciendo detenido donde no moleste", "Aumentar la velocidad", "Ninguna es correcta", "Hacer cambio de luces y tocar la bocina para avisar al resto de los conductores"],
    ["No", "Sí, pero reduciendo la velocidad"],
    ["Parte de la calle habilitada para ser atravesada por peatones", "Los llamados lomos de burro", "Las señalizadas con franjas blancas paralelas", "Parte de la vereda donde se debe esperar hasta poder cruzar"],
    ["Falso", "Verdadero"],
    ["Verdadero","Falso"],
    ["Tomar fuertemente el volante y frenar suavemente como sea posible", "Frenar bruscamente", "Quitar el pie del acelerador y girar para el lado que reventó el neumático", "Frenar suavemente arrimando el auto al borde dereho hasta detenerse"],
    ["Verdadero", "Falso"],
    ["Verdadero", "Falso"],
    ["Falso", "Verdadero"],
    ["Falso", "Verdadero"],
    ["El tiempo de reacción", "La visión lateral", "La audición", "Ninguna es correcta"],
    ["Procure detenerlo bombeando intermitentemente el freno", "Frene enérgicamente", "Acelere", "Todas son incorrectas"],
    ["Las distancias de frenado son mayores", "La aceleración será mas fácil", "Necesitará menor distancia para pasar y parar", "Todas son incorrectas"],
    ["Falso", "Verdadero"],
    ["Los vehículos que aparezcan por la derecha","Los vehículos que aparezcan por la izquierda", "Los que llegan primero al cruce", "Los que circulan por la avenida"],
    ["No debe ciruclas", "Deben ciruclar solo de día", "Deben circular a bajas velocidades", "Deben ciruclar solo de noche"],
    ["Verdadero", "Falso"],
    ["Todas son correctas", "Un extintor", "Dos balizas o triángulos", "Juegos para entretener niños si viajan con ellos"],
    ["La mitad en metros de la velocidad en Km/h", "Un cuarto en metros de la velocidad en Km/h", "El doble en metros de la velocidad en Km/h", "Ninguna es correcta"],
    ["Aplica el freno de manos y gira las ruedas hacia el cordón de la vereda","Deja derecho el auto y aplica el freno de mano","Aplica el freno de manos y gira las ruedas en sentido contrario al cordón de la vereda","Ninguna es correcta"],
    ["Falso", "Verdadero"],
    ["Debe circular a la derecha del centro de la calzada", "Debe circular en el centro de la calzada", "Debe circular en el centro de la calzada siempre y cuando no venga otro vehículo de frente", "Debe circular a la izquierda de la calzada"],
    ["Falso", "Verdadero"],
    ["Debe mirar por el espejo retrovisor, encender el señalero y acercarse al cordón derecho", "Debe encender el señalero derecho", "Debe acercar el vehículo a la izquierda, encender el señalero y doblar con precaución"],
    ];


function arranco(){
    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
    const cantidad_de_preguntas = 30;
    var myArray = [];
    myArray.length = cantidad_de_preguntas;
    var numeros_repetidos = [];
    var i = 0;
    while(i < myArray.length){
        indice_aleatorio = Math.floor(Math.random()*preguntas.length);
        for (j in myArray){
            console.log('Entro?');
            if (myArray[j] == indice_aleatorio){
                numeros_repetidos.push(indice_aleatorio);
                indice_aleatorio = Math.floor(Math.random()*preguntas.length);
            }
            for (j in numeros_repetidos){
                while (indice_aleatorio == numeros_repetidos[j]){
                    indice_aleatorio = Math.floor(Math.random()*preguntas.length) ;
                    j = 0 ;
                }
            }
        }
        myArray[i] = indice_aleatorio;
        numeros_repetidos[i] = indice_aleatorio;
        i++;
    }
    const my = myArray;
    console.log("ARRAY: "+my);
    return my
}
// Esta constante sirve para poder saber cuales tengo bien y cuales mal
const ARRAY = arranco();
function arreglo(){
    return ARRAY
}
function quiero_preguntas(my_array){
    var tengo_preguntas = [];
    for (i in my_array){
        tengo_preguntas[i] = preguntas[my_array[i]];
    }
    return tengo_preguntas
}

function quiero_respuestas(my_array){
    var tengo_respuestas = [];
    for (i in my_array){
        tengo_respuestas[i] = respuestas[my_array[i]];
    }
    return tengo_respuestas
}
