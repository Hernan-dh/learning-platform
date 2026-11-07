# Arquitectura

## Propósito

QA & AI Learning Platform es una plataforma estática de aprendizaje. Integra rutas temáticas, una guía de estudio y una práctica de preguntas multiple choice con explicaciones.

## Componentes

| Componente | Responsabilidad |
| --- | --- |
| `dist/index.html` | Estructura, secciones de rutas y contenedor de práctica. |
| `dist/styles.css` | Diseño responsive, tema visual y estados de respuestas. |
| `dist/app.js` | Banco de preguntas, selección de ruta, evaluación, puntaje y feedback. |
| `scripts/verify.py` | Verificación estructural sin dependencias externas. |
| `scripts/document.py` | Generación local de changelog y borradores ADR. |
| `scripts/prepare_commit.py` | Prepara una propuesta de commit Conventional Commit sin modificar Git. |

## Flujo de una sesión

1. La persona elige una ruta de aprendizaje o la práctica completa.
2. El cliente filtra y mezcla las preguntas del banco local.
3. Al responder, marca la opción correcta, muestra la explicación y actualiza el puntaje.
4. Al terminar, presenta el resultado y permite repetir la ruta.

No existen servicios, almacenamiento persistente ni llamadas a APIs en tiempo de ejecución.
