# QA & AI Interview Lab

Simulador estático de entrevista técnica y formación para QA, Playwright, ingeniería, IA y operaciones.

## Desarrollo local

El sitio no necesita dependencias: abrí `dist/index.html` en un navegador o servilo con la herramienta local de tu preferencia.

## Automatización de documentación y entrega

```powershell
python scripts/verify.py
python scripts/document.py changelog
python scripts/document.py decision "Decisión de arquitectura"
python scripts/prepare_commit.py "feat(quiz): agrega una nueva ruta"
python scripts/publish.py
python scripts/publish.py --preview --title "feat(quiz): agrega una nueva ruta" --description "Incorpora preguntas y feedback para una ruta adicional."
python scripts/install_hooks.py
```

`prepare_commit.py` solamente valida el árbol de trabajo y muestra el comando Conventional Commit sugerido. `publish.py` usa Gemini, OpenRouter o Groq para proponer el Conventional Commit desde los cambios locales. Copiá `.env.example` a `.env` y configurá una clave de proveedor. Luego verifica, lista los archivos y solicita que escribas `PUBLISH` antes de hacer stage, commit y push. Ninguno inicializa repositorios.

Los cambios funcionales deben actualizar `docs/ARCHITECTURE.md`; los cambios de verificación o entrega deben actualizar `docs/OPERATIONS.md`.
