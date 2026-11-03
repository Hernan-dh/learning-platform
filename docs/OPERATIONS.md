# Operaciones

## Verificación

Ejecutá antes de compartir o publicar cambios:

```powershell
python scripts/verify.py
```

El verificador comprueba que estén presentes los archivos estáticos requeridos, que las referencias locales de HTML sean válidas y que `app.js` tenga una sintaxis aceptada por Node cuando está disponible.

## GitHub Pages

El workflow `.github/workflows/pages.yml` ejecuta `scripts/verify.py`, empaqueta `dist/` y la publica usando las acciones oficiales de GitHub Pages cuando hay un push a `main` o una ejecución manual. Después de crear el repositorio remoto, habilitá **Settings → Pages → Source: GitHub Actions**.

La publicación no requiere secretos, porque el sitio no usa backend ni variables de runtime. La URL de despliegue queda disponible en el job `Deploy` de GitHub Actions.

## Documentación continua

```powershell
python scripts/document.py changelog
python scripts/document.py decision "Título de la decisión"
```

El changelog se deriva del historial Git que ya exista. Si todavía no hay repositorio o commits, el resultado lo indica sin fallar. Los ADR se crean como borradores en `docs/decisions/` y requieren completar su contexto, decisión y consecuencias.

## Propuesta de commit

```powershell
python scripts/prepare_commit.py "feat(quiz): agrega preguntas de API testing"
```

El comando exige formato Conventional Commit y muestra un resumen de cambios. Es deliberadamente de solo lectura: no usa `git init`, `git add`, `git commit`, `git push` ni modifica la configuración de Git. El propietario del repositorio decide y ejecuta cualquier commit.

## Publicación manual confirmada

Cuando ya hayas creado y configurado el repositorio, podés verificar una publicación sin tocar Git:

```powershell
python scripts/publish.py
# O bien, sin preguntas interactivas:
python scripts/publish.py --preview --title "feat(quiz): agrega preguntas de API" --description "Incorpora evaluación y explicación de contratos API."
```

Sin argumentos, el script genera título y descripción con Gemini, OpenRouter o Groq a partir del diff local. Configurá al menos una clave en `.env` (usá `.env.example` como referencia). El script primero ejecuta la verificación, lista los archivos incluidos y espera que escribas exactamente `PUBLISH`. Solo después hace staging, commit y push. No inicializa repositorios, no fuerza pushes y no se ejecuta automáticamente.

## Hook opcional

Una vez que exista un repositorio creado por el propietario, se puede habilitar el hook local:

```powershell
python scripts/install_hooks.py
```

El hook ejecuta la verificación antes de un commit. No crea repositorios y no realiza commits por sí mismo.
