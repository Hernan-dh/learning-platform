# QA & AI Learning Platform

## Content and coverage

- `dist/index.html`: main learning platform and practice lab.
- `dist/app.js` and `dist/questions-v12.js`: **746 questions** with tags, filters, configurable sessions, explanations, and study links.
- `dist/learning-guide.html`: Learning Guide v11 covering QA, automation, APIs, data, delivery, AI, operations, and IoT.
- `QUESTION_COVERAGE_V12.csv`: auditable map between guide topics and the question bank.

The v12 coverage expansion adds 182 dedicated questions for guide topics that lacked direct or equivalent coverage. New questions retain module and technology/skill tags and link from feedback to the corresponding Learning Guide section.

The guide includes advanced Selenium/TestNG, Java and algorithms, JDBC/SQL, CI/CD, Playwright, AI agents, RAG, MCP, n8n, AI evaluation and safety, reliability, IoT, and QA professional-practice topics.

Simulador estático de entrevista técnica y formación para QA, Playwright, ingeniería, IA y operaciones.

## Desarrollo local

El sitio no necesita dependencias: abrí `dist/index.html` en un navegador o servilo con la herramienta local de tu preferencia.

## Publicación en GitHub Pages

El workflow `.github/workflows/pages.yml` valida y publica `dist/` cada vez que hay un push a `main`.

1. Creá el repositorio remoto y subí este proyecto a la rama `main`.
2. En GitHub, abrí **Settings → Pages** y elegí **GitHub Actions** como fuente.
3. El primer workflow exitoso mostrará la URL pública en el resumen de Actions.

También podés iniciarlo manualmente desde **Actions → Deploy GitHub Pages → Run workflow**. No requiere secretos para este sitio estático.

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
