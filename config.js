// --- START OF FILE config.js ---

// URLs de API Backend 
const apiUrlBase = 'https://productsonpoint.com/hce/api';
const apiCentrosMedicos = `${apiUrlBase}/centros.php`; // Script para la tabla Centros Medicos
const apiCodigos = `${apiUrlBase}/codigos.php`; // Script para la tabla Códigos Activación
const apiConsultas = `${apiUrlBase}/consultas.php`; // Script para la tabla Consultas
const apiMedicos = `${apiUrlBase}/medicos.php`;     // Script para la tabla Mécos
const apiMedicosCentroM = `${apiUrlBase}/medicos_centrom.php`;     // Script para la tabla Mécos-CentroMedico
const apiPacientes = `${apiUrlBase}/pacientes.php`; // Script para la tabla Pacientes
const apiPacientesCentroM = `${apiUrlBase}/pacientes_centrom.php`; // Script para la tabla Pacientes-CentroMedico
const apiSeguros = `${apiUrlBase}/seguros.php`;     // Script para la tabla Seguros
const apiVacunas = `${apiUrlBase}/vacunas.php`; // Script para la tabla Vacunas

// n8n Webhook URLs
const n8nWebhookUrlGrabacionPrincipal = 'https://n8n.productsonpoint.com/webhook-test/9acf56bf-21f4-4f91-8d5d-7c93e5260599';
const n8nWebhookUrlActualizacionConsulta = 'https://n8n.productsonpoint.com/webhook-test/52b8e7fd-51ff-4af7-b3a8-0a02e3a4597c';

// --- END OF FILE config.js ---