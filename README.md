# Laboratorio 2 - Programación Computacional IV

**Institución:** Universidad Gerardo Barrios.

**Materia:** Programación Computacional IV.

**Actividad:** Laboratorio 2 - Primer Cómputo (Semana 5). 

**Estudiante:** Kevin Antonio Castro Araujo.

**Codigo:** SMSS032024.

## Análisis de Eventos 

| Tipo de evento | Elemento afectado | Resumen de lo que hace |
| :--- | :--- | :--- |
| **click** | `<div class="box" id="box1">` | Cambia el color de fondo y el texto al hacer un clic izquierdo sencillo. |
| **dblclick** | `<div class="box" id="box2">` | Se activa al realizar dos clics rápidos, modificando el contenido de la caja. |
| **mouseover** | `<div class="box" id="box3">` | Detecta cuando el cursor entra al elemento y aplica un efecto de escala (zoom). |
| **mouseout** | `<div class="box" id="box4">` | Se dispara al sacar el cursor del elemento, restaurando o cambiando el mensaje. |
| **contextmenu**| `<div class="box" id="box5">` | Bloquea el menú desplegable del clic derecho nativo y muestra una alerta personalizada. |
| **mousedown** | `<div class="box" id="box6">` | Detecta el momento exacto en que se presiona el botón del mouse, cambiando el borde. |
| **mouseup** | `<div class="box" id="box7">` | Se activa al soltar el botón del mouse, indicando el fin de la presión del clic. |
| **mousemove** | `<div class="box" id="box8">` | Rastrea y muestra las coordenadas X e Y del movimiento del mouse en tiempo real. |

---

## Resolución de Preguntas.

### ¿Utilizó listeners para sus eventos o los describió como propiedades de los elementos? Justifique su elección.
**Respuesta:** Se utilizaron **listeners** mediante el método `addEventListener()`.  
**Justificación:** Esta elección se basa en las buenas prácticas de desarrollo web, ya que permite mantener una separación clara entre la estructura (HTML) y el comportamiento (JS). Además, los listeners permiten asignar múltiples funciones a un mismo evento sin riesgo de sobrescribir código previo, ofreciendo mayor escalabilidad y un código más limpio y profesional.

### Seleccione uno de sus eventos y explique por qué ese tipo de evento era la mejor elección para esa situación y qué otro podría haber utilizado.
**Evento seleccionado:** `contextmenu`.  
**Explicación:** Es la mejor elección para la Caja #5 porque permite interceptar específicamente la intención del usuario de abrir un menú secundario. Al usarlo, podemos invocar `preventDefault()` para anular el menú del sistema y ofrecer una experiencia personalizada en la web.  
**Alternativa:** Se podría haber utilizado el evento `mousedown` junto con una validación de propiedad (detectando si el código del botón es el 2), pero `contextmenu` es semánticamente más correcto y eficiente para este propósito específico.
.
