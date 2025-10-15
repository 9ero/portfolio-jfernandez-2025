# 🚀 Guía de Despliegue en Vercel

## Configuración de Variables de Entorno

Este proyecto requiere las siguientes variables de entorno para funcionar correctamente en producción:

### 📧 EmailJS (Formulario de Contacto)

Obtén estas credenciales desde [EmailJS Dashboard](https://www.emailjs.com/):

```
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

**Cómo obtenerlas:**
1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta
2. **Service ID**: En "Email Services" → Copia el Service ID
3. **Template ID**: En "Email Templates" → Copia el Template ID
4. **Public Key**: En "Account" → "General" → Copia tu Public Key

**Configuración del Template:**
Tu template debe incluir estas variables:
```
From: {{fullname}}
Email: {{email}}

Message:
{{message}}
```

---

### 🔒 Cloudflare Turnstile (Protección Anti-Spam)

Obtén esta clave desde [Cloudflare Dashboard](https://dash.cloudflare.com/):

```
PUBLIC_TURNSTILE_SITE_KEY=tu_site_key
```

**Cómo obtenerla:**
1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecciona "Turnstile" en el menú lateral
3. Crea un nuevo sitio
4. Copia el "Site Key"

---

## 📝 Configuración en Vercel

### Paso 1: Conectar el Repositorio

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "Add New" → "Project"
3. Importa tu repositorio de GitHub

### Paso 2: Configurar las Variables de Entorno

1. En la página de configuración del proyecto, ve a **"Environment Variables"**
2. Agrega las siguientes variables **una por una**:

| Variable Name | Value |
|--------------|-------|
| `PUBLIC_EMAILJS_SERVICE_ID` | Tu Service ID de EmailJS |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | Tu Template ID de EmailJS |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | Tu Public Key de EmailJS |
| `PUBLIC_TURNSTILE_SITE_KEY` | Tu Site Key de Cloudflare Turnstile |

3. Marca las variables para todos los entornos: **Production**, **Preview**, y **Development**

### Paso 3: Configurar Build Settings

Vercel debería detectar automáticamente que es un proyecto Astro, pero verifica:

- **Framework Preset**: Astro
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Paso 4: Desplegar

Click en **"Deploy"** y espera a que termine el build.

---

## 🧪 Verificación Local Antes de Desplegar

Antes de desplegar a Vercel, prueba localmente:

1. **Crea un archivo `.env` en la raíz del proyecto:**
   ```bash
   PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   PUBLIC_TURNSTILE_SITE_KEY=tu_site_key
   ```

2. **Ejecuta el proyecto:**
   ```bash
   pnpm dev
   ```

3. **Prueba el formulario de contacto** y verifica que funcione correctamente

---

## ⚠️ Notas Importantes

- ✅ Todas las variables usan el prefijo `PUBLIC_` porque se usan en el cliente
- ✅ Nunca subas el archivo `.env` a Git (ya está en `.gitignore`)
- ✅ El adaptador de Vercel está configurado en `astro.config.mjs`
- ✅ Para Cloudflare Turnstile, asegúrate de agregar tu dominio de Vercel en la configuración del sitio en Cloudflare

---

## 🐛 Problemas Comunes

### Error 412 en EmailJS
- Verifica que el "From email" en tu template sea el mismo email que usaste para autenticar el servicio
- Re-autentica tu servicio de email en EmailJS

### Turnstile no se muestra
- Verifica que la `PUBLIC_TURNSTILE_SITE_KEY` esté configurada correctamente
- Asegúrate de agregar tu dominio de Vercel en la configuración de Turnstile en Cloudflare

### Variables de entorno no se cargan
- Verifica que todas las variables tengan el prefijo `PUBLIC_`
- Después de agregar variables en Vercel, **redeploy el proyecto**

---

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build/)
- [Documentación del Adaptador de Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)

