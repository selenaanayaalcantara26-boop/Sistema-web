// =========================================================
        // CONDICIONALES: VALIDACIÓN CON ALERTS Y SWITCH
        // =========================================================
        function iniciarSesion() {
            const user = document.getElementById('usuario').value.trim().toLowerCase();
            const pass = document.getElementById('password').value;

            // 1. CONDICIONAL IF/ELSE con alert()
            if (pass === "1234" && (user === "alumno" || user === "docente")) {
                
                // Lanzamos pop-out de éxito
                alert("¡Acceso Concedido! Bienvenido a la Mesa de Partes Virtual.");
                
                let aliasRol = "";

                // 2. CONDICIONAL SWITCH para personalizar la interfaz interna
                switch(user) {
                    case 'alumno':
                        aliasRol = "Estudiante (Trámites de Constancias)";
                        alert("Rol Detectado: Alumno. Se habilitará el buzón de solicitudes académicas.");
                        break;
                    case 'docente':
                        aliasRol = "Docente (Registro de Actas)";
                        alert("Rol Detectado: Personal Docente. Se habilitará el sistema de carga de notas.");
                        break;
                }

                // Cambiamos de sección visualmente
                document.getElementById('nombreRol').innerText = aliasRol;
                document.getElementById('seccionLogin').style.display = "none";
                document.getElementById('seccionPanel').style.display = "block";

            } else {
                // Pop-out en caso de error
                alert("Error: Usuario o contraseña incorrectos. Inténtalo de nuevo.");
            }
        }

        function cerrarSesion() {
            alert("Sesión cerrada correctamente.");
            document.getElementById('usuario').value = "";
            document.getElementById('password').value = "";
            document.getElementById('seccionPanel').style.display = "none";
            document.getElementById('seccionLogin').style.display = "block";
        }

        // =========================================================
        // BUCLES: ITERACIÓN CON ALERTS Y CONFIRMS
        // =========================================================
        
        // Bucle FOR: Lanza tantas alertas consecutivas como el usuario haya digitado
        function mostrarHistorialFor() {
            const cantidad = parseInt(document.getElementById('cantidadTramites').value);

            if (isNaN(cantidad) || cantidad <= 0 || cantidad > 5) {
                alert("Por favor, ingresa un número válido entre 1 y 5.");
                return;
            }

            alert(`Iniciando auditoría automatizada para ${cantidad} expedientes...`);

            // El bucle FOR se ejecuta de forma controlada
            for (let i = 1; i <= cantidad; i++) {
                alert(`Mostrando Ventana Emergente ${i} de ${cantidad}\nExpediente: EXP-2026-00${i * 7} -> Estado: Recibido.`);
            }

            alert("🏁 Fin del ciclo FOR: Se han revisado todas las alertas del historial.");
        }

        // Bucle WHILE: Utiliza un pop-out interactivo tipo confirm()
        function procesarPendientesWhile() {
            const cantidad = parseInt(document.getElementById('cantidadTramites').value);

            if (isNaN(cantidad) || cantidad <= 0 || cantidad > 5) {
                alert("Por favor, ingresa una cantidad inicial válida.");
                return;
            }

            let contador = 1;
            let continuar = true;

            alert("Iniciando simulación de cola de atención interactiva.");

            // El bucle WHILE continuará mientras 'continuar' sea verdadero Y no pasemos el límite
            while (continuar && contador <= cantidad) {
                
                // confirm() genera un pop-out con botones "Aceptar" (true) y "Cancelar" (false)
                continuar = confirm(`⚙️ Procesando trámite pendiente #${contador} de ${cantidad}.\n¿Deseas pasar al siguiente documento de la mesa de partes?`);
                
                if (continuar) {
                    contador++;
                }
            }

            // Condicional final para dar feedback del cierre del bucle
            if (contador > cantidad) {
                alert("¡Excelente! Procesaste de manera exitosa toda la cola asignada.");
            } else {
                alert(`Ciclo interrumpido por el usuario en el trámite #${contador}.`);
            }
        }