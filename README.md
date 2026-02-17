# Lab2-KevinCastro-SMSS032024
# Laboratorio 2 - Programación Computacional IV

[cite_start]**Institución:** Universidad Gerardo Barrios [cite: 2]  
[cite_start]**Materia:** Programación Computacional IV [cite: 3]  
[cite_start]**Actividad:** Laboratorio 2 - Primer Cómputo (Semana 5) [cite: 3]  
**Estudiante:** [Tu Nombre Aquí]

---

## 1. Descripción del Proyecto
[cite_start]Este proyecto consiste en una página web diseñada para evaluar la comprensión de herramientas avanzadas del lenguaje JavaScript[cite: 4, 5]. [cite_start]La página presenta una estructura de cuadrícula con 8 espacios, cada uno activando un evento de JavaScript distinto[cite: 7, 18].

* [cite_start]**Objetivo:** Evaluar la comprensión de herramientas avanzadas en JavaScript[cite: 4].
* [cite_start]**Despliegue:** La página está disponible a través de GitHub Pages[cite: 27].
* **URL del Deploy:** [PEGA AQUÍ TU ENLACE DE GITHUB PAGES]

---

## [cite_start]2. Análisis de Eventos (Tabla) [cite: 20, 21]

| Tipo de evento | Elemento afectado | Resumen de lo que hace |
| :--- | :--- | :--- |
| **click** | `div#box1` | Cambia el color de fondo y el texto al hacer un clic izquierdo sencillo. |
| **dblclick** | `div#box2` | Se activa al realizar dos clics rápidos, modificando el contenido de la caja. |
| **mouseover** | `div#box3` | Detecta cuando el cursor entra al elemento y aplica un efecto de escala (zoom). |
| **mouseout** | `div#box4` | Se dispara al sacar el cursor del elemento, restaurando o cambiando el mensaje. |
| **contextmenu**| `div#box5` | Bloquea el menú desplegable del clic derecho nativo y muestra una alerta personalizada. |
| **mousedown** | `div#box6` | Detecta el momento exacto en que se presiona el botón del mouse, cambiando el borde. |
| **mouseup** | `div#box7` | Se activa al soltar el botón del mouse, indicando el fin de la presión del clic. |
| **mousemove** | `div#box8` | Rastrea y muestra las coordenadas X e Y del movimiento del mouse en tiempo real. |

---

## [cite_start]3. Resolución de Preguntas [cite: 22]

### ¿Utilizó listeners para sus eventos o los describió como propiedades de los elementos? [cite_start]Justifique su elección[cite: 23].
**Respuesta:** Se utilizaron **listeners** mediante el método `addEventListener()`.  
**Justificación:** Esta elección se basa en las buenas prácticas de desarrollo web, ya que permite mantener una separación clara entre la estructura (HTML) y el comportamiento (JS). Además, los listeners permiten asignar múltiples funciones a un mismo evento sin riesgo de sobrescribir código previo, ofreciendo mayor escalabilidad y un código más limpio y profesional.

### [cite_start]Seleccione uno de sus eventos y explique por qué ese tipo de evento era la mejor elección para esa situación y qué otro podría haber utilizado[cite: 24].
**Evento seleccionado:** `contextmenu`.  
**Explicación:** Es la mejor elección para la Caja #5 porque permite interceptar específicamente la intención del usuario de abrir un menú secundario. Al usarlo, podemos invocar `preventDefault()` para anular el menú del sistema y ofrecer una experiencia personalizada en la web.  
**Alternativa:** Se podría haber utilizado el evento `mousedown` junto con una validación de propiedad (detectando si el código del botón es el 2), pero `contextmenu` es semánticamente más correcto y eficiente para este propósito específico.

---

## [cite_start]4. Criterios de Evaluación Cumplidos [cite: 25]
* [cite_start]**Código (3 pts):** Página codificada según la estructura solicitada[cite: 26].
* [cite_start]**Funcionalidad (2 pts):** Uso de GitHub Pages para la presentación[cite: 27].
* [cite_start]**Diseño (1 pt):** Estilos aplicados mediante CSS[cite: 28].
* [cite_start]**Análisis (4 pts):** Presentación de tabla y preguntas en este documento[cite: 29].
