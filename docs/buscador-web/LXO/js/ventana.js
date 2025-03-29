function openModal(section) {
    let title = "";
    let content = "";

    if (section === "cursos") {
        title = "Cursos Beyond: Tu Ventaja Competitiva 🎓🚀";
        content = `
            <h3>🗣 Descripción de Ventaja Competitiva</h3>
            <p>Al inscribirte en una <strong>Licenciatura en Línea</strong>, tendrás acceso a los <strong>Cursos Beyond</strong>, donde podrás obtener hasta <strong>8 cursos de profesionalización sin costo adicional</strong>. Estos cursos, que tienen un valor aproximado de <span style="color: green; font-weight: bold;">$15,000 MXN</span>, te ayudarán a desarrollar habilidades clave en áreas como tecnología y gestión, mejorando tu perfil laboral.</p>
            <p>Además, recibirás <strong>certificaciones</strong> que fortalecerán tu currículum y te prepararán para las demandas del mercado laboral actual.</p>

            <h3>📘 ¿Qué es?</h3>
            <p>Oportunidad de acceder a hasta <strong>8 cursos de profesionalización</strong> en áreas clave como tecnología y gestión, que complementan tus estudios en <strong>Licenciatura Ejecutiva o Maestría</strong>.</p>

            <h3>🔄 ¿Cómo funciona?</h3>
            <ul>
                <li>Al inscribirte, recibirás un <strong>cupón promocional</strong> al inicio de clases.</li>
                <li>Podrás usarlo para acceder a estos cursos sin costo adicional.</li>
                <li>Este beneficio tiene un valor aproximado de <strong>$15,000 MXN</strong>.</li>
            </ul>

            <h3>🏆 Beneficio Principal</h3>
            <p>Al inscribirte, recibirás un cupón promocional al inicio de clases, que podrás usar para acceder a estos cursos sin costo adicional, los cuales tienen un valor aproximado de <strong>$15,000 MXN</strong>.</p>

            <h3>💭 Resumen Demostrativo VC</h3>
            <p><strong>📘 Cursos Beyond de UVM GO!</strong></p>
            <p>Al inscribirte en la <strong>Licenciatura en Línea en UVM</strong>, te incluimos una serie de <strong>cursos cortos de especialización</strong> que te ofrecen habilidades actualizadas y demandadas por el mercado laboral.</p>
            
            <ul>
                <li>🚀 <strong>Beneficio:</strong> Recibe hasta <span style="color: green; font-weight: bold;">$15,000 MXN</span> en cursos sin costo adicional durante tu programa.</li>
                <li>💼 <strong>Acceso:</strong> A partir del primer cuatrimestre, podrás redimir <strong>cupones</strong> en la plataforma <strong>UVM GO Beyond</strong>.</li>
            </ul>

            <p>Este beneficio exclusivo aplica para <strong>todas las Licenciaturas en Línea</strong>.</p>

            <h3>💵 ¿Cuál es el valor económico de los Cursos Beyond durante todo el programa?</h3>
            <p>Cada curso tiene un costo variable, pero como estudiante, <strong>no tendrás que pagar por hasta 8 cursos</strong>, ya que son gratis para ti.</p>

            <p>Pagina de UVM GO <a href="https://go.uvm.mx/cursos" target="_blank">sitio web</a>.</p>
        
            <img src="/docs/buscador-web/LXO/img/cursos-beyond.jpg" alt="Cursos Beyond" style="width:100%; border-radius: 10px;">
        `;
    } else if (section === "gym") {
        title = "Gym Académico";
        content = `
            <h3>🗣️ Descripción del GYM Académico</h3>
            <p>Como estudiante de nuevo ingreso en UVM, podrás acceder al <strong>GYM Académico</strong>, un programa de preparación diseñado para fortalecer tus habilidades antes del inicio de clases. Este beneficio exclusivo consiste en sesiones semanales que abarcan temas clave como matemáticas, técnicas de estudio, redacción académica y más. Con el GYM Académico, te asegurarás de comenzar tus estudios con una base sólida, mejorando tu rendimiento y confianza desde el primer día de clases.</p>

            <h3>📜 ¿Qué es el GYM Académico?</h3>
            <p>El GYM Académico es una serie de sesiones en línea organizadas semanalmente, cada una enfocada en un área clave para el desempeño académico. Durante estas sesiones, los estudiantes pueden aprender sobre temas como matemáticas, técnicas de estudio, redacción académica, gestión del tiempo, y más. Las sesiones están diseñadas para que el estudiante pueda obtener una base sólida antes del inicio de clases.</p>

            <img src="/docs/buscador-web/LXO/img/gym-academico.jpg" alt="Gym Académico" style="width:100%; border-radius: 10px;">

            <h3>🔄 ¿Cómo funciona?</h3>
            <p>El programa se lleva a cabo desde el <strong>23 de septiembre hasta el 13 de diciembre de 2024</strong>. Cada sesión se realiza en un día específico de la semana, con horarios estándar (CDMX) y un enlace de acceso directo. Los estudiantes deben registrarse con su nombre completo y asistir puntualmente. <strong>Las sesiones se proporcionan mediante un PDF con vínculos por un Asesor Educativo una vez que el PPT confirma el pago.</strong></p>

            <h3>💵 ¿Tiene costo adicional?</h3>
            <p><strong>No</strong>, el GYM Académico es un beneficio sin costo adicional para los estudiantes de nuevo ingreso en UVM. Todas las sesiones, materiales y recursos que se brindan están incluidos y son de acceso gratuito como parte del programa de bienvenida. <strong>Siempre y cuando el PPT ya se encuentre inscrito.</strong></p>

            <h3>📅 Temas y Sesiones Destacadas</h3>
            <ul>
                <li><strong>Citar y referenciar en actividades académicas:</strong> Importancia de las citas y referencias, uso del estilo APA y prevención de plagio. *(Lunes 18:00 - 20:00)*</li>
                <li><strong>Recomendaciones para el estudio en línea:</strong> Estrategias para la autorregulación del aprendizaje en plataformas digitales. *(Martes 16:00 - 18:00)*</li>
                <li><strong>Redacción y presentación académica:</strong> Estructura de actividades, redacción efectiva y recursos confiables. *(Lunes y Miércoles 18:00 - 19:30)*</li>
                <li><strong>Mindfulness como competencia clave:</strong> Técnicas de mindfulness para mejorar la concentración y el bienestar mental. *(Lunes y Miércoles 20:30 - 22:00)*</li>
                <li><strong>Análisis de la Reforma Judicial en México:</strong> Fundamentos del sistema judicial y perspectivas de reforma. *(Lunes 18:30 - 20:00)*</li>
                <li><strong>Mecanismos Alternativos de Solución de Controversias:</strong> Aplicación en derecho penal, civil y del consumidor. *(Miércoles 18:30 - 20:00)*</li>
                <li><strong>Fundamentos de Excel:</strong> Herramientas y funciones esenciales para análisis de información. *(Lunes y Miércoles 18:00 - 20:00)*</li>
                <li><strong>Matemáticas desde cero:</strong> Conceptos básicos en matemáticas aplicables en diversas áreas. *(Martes y Miércoles 20:30 - 22:00)*</li>
            </ul>

            <h3>💬 Resumen Demostrativo</h3>
            <p><strong>🏋️ GYM Académico UVM</strong></p>
            <ul>
                <li>🚀 <strong>Beneficio:</strong> Participa en <strong>sesiones sin costo adicional</strong> en temas esenciales como matemáticas, estrategias de estudio en línea, redacción académica y más.</li>
                <li>📅 <strong>Acceso:</strong> Las sesiones se imparten en días específicos cada semana, desde el <strong>23 de septiembre hasta el 13 de diciembre</strong>, ayudándote a reforzar habilidades clave para tu desarrollo académico.</li>
            </ul>

            <h3>ℹ️ Q&A</h3>
            <p><strong>❓ ¿Qué es el GYM Académico de UVM?</strong></p>
            <p>El GYM Académico es un programa de preparación académica dirigido a estudiantes de nuevo ingreso en UVM. Ofrece sesiones en línea sobre temas clave, como matemáticas, técnicas de estudio, redacción académica, y gestión del tiempo, para fortalecer sus habilidades antes del inicio de clases.</p>

            <p><strong>❓ ¿Cuándo y cómo se imparten las sesiones?</strong></p>
            <p>Las sesiones del GYM Académico se imparten semanalmente en días específicos y en horarios estándar (CDMX), del 23 de septiembre al 13 de diciembre de 2024. Puedes conectarte a cada sesión a través de un enlace directo proporcionado por la universidad.</p>

            <p><strong>❓ ¿Tiene algún costo adicional?</strong></p>
            <p><strong>No</strong>, el GYM Académico es un beneficio exclusivo y sin costo adicional para los estudiantes de nuevo ingreso en UVM. Las sesiones y materiales son completamente gratuitos.</p>

            <p><strong>❓ ¿Qué temas se abordan en el GYM Académico?</strong></p>
            <p>Algunos de los temas que se tratan son:</p>
            <ul>
                <li>Citar y referenciar en actividades académicas (estilo APA y prevención de plagio)</li>
                <li>Recomendaciones para el estudio en línea y plataformas digitales</li>
                <li>Técnicas de redacción académica</li>
                <li>Mindfulness para el bienestar mental y la concentración</li>
                <li>Fundamentos de Excel</li>
                <li>Matemáticas básicas</li>
            </ul>

            <p><strong>❓ ¿Es obligatorio asistir a todas las sesiones?</strong></p>
            <p>Si bien no es obligatorio, se recomienda altamente asistir a todas las sesiones posibles, ya que cada una está diseñada para brindarte herramientas esenciales para tu éxito académico en UVM.</p>

            <p><strong>❓ ¿Cómo accedo a las sesiones?</strong></p>
            <p>Podrás acceder a cada sesión desde la plataforma en línea de UVM mediante un enlace de Class Collaborate. Solo necesitas conectarte en el horario indicado y registrarte con tu nombre completo.</p>

            <p><strong>❓ ¿Qué necesito para participar en el GYM Académico?</strong></p>
            <p>Para participar, necesitas una computadora con acceso a internet, y es recomendable contar con audífonos y micrófono para facilitar tu participación. También se sugiere tener a la mano papel y lápiz para tomar notas.</p>
        `;
    } else if (section === "doble-titulacion") {
        title = "Doble Titulación con National Louis University (NLU)";
        content = `
            <h3>📜 Descripción General</h3>
            <p>La doble titulación en colaboración con <strong>NLU</strong> es un programa opcional que los estudiantes de licenciaturas en línea de UVM pueden agregar a su plan de estudios. Este programa se cursa completamente en línea de manera asincrónica y se imparte en inglés. Consta de 11 materias adicionales, incluyendo un certificado internacional. 🌐📚</p>

            <h3>🎯 Beneficios</h3>
            <ul>
                <li>🌍 <strong>Internacionalización:</strong> Los estudiantes obtienen una perspectiva global y enriquecen su formación académica con un enfoque internacional.</li>
                <li>🏅 <strong>Doble Título:</strong> Al finalizar el programa, los estudiantes reciben un segundo título que fortalece sus habilidades y conocimientos, mejorando su perfil profesional a nivel internacional.</li>
            </ul>

            <h3>🔄 Proceso</h3>
            <p>📝 Los estudiantes gestionan su inscripción mediante la plataforma Blackboard, donde deben llenar un formulario para ser contactados por la oficina de internacionalización.</p>

            <h3>💲 Costo</h3>
            <p><strong>Precio por Materia:</strong> El costo se paga por materia y será especificado por la coordinación de internacionalización una vez verificada la viabilidad del programa para la doble titulación.</p>

            <h3>🎓 Titulación</h3>
            <p>Al finalizar, los estudiantes obtienen el título de <strong>"Bachelor of Science in Management"</strong> por parte de NLU.</p>

            <h3>✅ Requisitos</h3>
            <ul>
                <li>✅ <strong>Revisión Previa:</strong> La oficina de internacionalización revisa la viabilidad del programa para cada estudiante.</li>
                <li>🔄 <strong>Coordinación:</strong> A través de la coordinación de la oficina internacional de UVM y NLU, se verifica que el programa del alumno sea compatible con la doble titulación.</li>
            </ul>

            <h3>📅 Aplicación</h3>
            <ul>
                <li>📅 <strong>Inicio:</strong> Desde el segundo cuatrimestre.</li>
                <li>📘 <strong>Asignaturas:</strong> Mínimo 11 asignaturas con NLU, cursando una o dos materias por ciclo. El número de materias puede variar según el plan de estudios.</li>
                <li>💻 <strong>Modalidad:</strong> Aplica para programas en línea de UVM (ONL) en colaboración con National Louis University.</li>
            </ul>

            <h3>❓ Preguntas y Respuestas sobre la Doble Titulación</h3>
            <ul>
                <li><strong>¿Qué es la doble titulación en colaboración con NLU?</strong> 🌐 Es un programa opcional que permite a los estudiantes de licenciaturas en línea de UVM obtener un segundo título de NLU, cursando 11 materias adicionales en inglés y en línea de manera asincrónica.</li>
                <li><strong>¿Cuáles son los beneficios de este programa?</strong> 🌍 Internacionalización y 🏅 obtención de un doble título que mejora el perfil profesional a nivel internacional.</li>
                <li><strong>¿Cuándo y dónde se aplica este beneficio?</strong> 📅 Desde el segundo cuatrimestre, 💻 en programas en línea de UVM, cursando asignaturas con NLU.</li>
                <li><strong>¿Cuáles son los requisitos para acceder a la doble titulación?</strong> ✅ Revisión previa por la oficina de internacionalización y 🔄 coordinación entre UVM y NLU para verificar la compatibilidad del programa del estudiante.</li>
                <li><strong>¿Cómo se gestiona la doble titulación?</strong> 📝 A través de la plataforma Blackboard, donde los estudiantes llenan un formulario para ser contactados por la oficina de internacionalización.</li>
                <li><strong>¿Cuál es el costo del programa?</strong> 💲 Se paga por materia, y el costo exacto es especificado por la coordinación de internacionalización una vez verificada la viabilidad del programa.</li>
                <li><strong>¿Qué título obtendré al finalizar el programa?</strong> 🎓 El título de "Bachelor of Science in Management" por parte de NLU.</li>
            </ul>

            <h3>🌟 Resumen Demostrativo</h3>
            <p><strong>Doble Titulación con NLU</strong></p>
            <ul>
                <li><strong>Programa:</strong> Doble Titulación con National Louis University (NLU)</li>
                <li><strong>Duración:</strong> 11 materias adicionales, cursadas en inglés 🌐📚</li>
                <li><strong>Modalidad:</strong> 100% en línea y asincrónica</li>
                <li><strong>Beneficios:</strong></li>
                <ul>
                    <li>🌍 <strong>Internacionalización:</strong> Perspectiva global y formación académica enriquecida.</li>
                    <li>🏅 <strong>Doble Título:</strong> Mejora tu perfil profesional con un título internacional.</li>
                </ul>
                <li><strong>Requisitos:</strong></li>
                <ul>
                    <li>✅ Revisión de la oficina de internacionalización</li>
                    <li>🔄 Coordinación entre UVM y NLU</li>
                </ul>
                <li><strong>Proceso:</strong> 📝 Inscripción a través de Blackboard</li>
                <li><strong>Costo:</strong> 💲 Precio por materia (detalles con la coordinación de internacionalización)</li>
                <li><strong>Inicio:</strong> 📅 Desde el segundo cuatrimestre</li>
            </ul>
        `;
    } else if (section === "acreditacion") {
        title = "Acreditación de Estudios EE.UU (LXO)";
        content = `
            <h3>📜 Descripción de la Ventaja (🗣️)</h3>
            <p>Al cursar una <strong>Licenciatura En Línea</strong>, accederás a la acreditación de tus estudios en Estados Unidos a través de la agencia IEE, afiliada a NACES. Este beneficio te abre nuevas oportunidades académicas y laborales en el extranjero, permitiéndote continuar tu formación en prestigiosas universidades americanas y ampliar tus opciones de inmigración y empleo formal con empresas de EE.UU.</p>

            <h3>🌍 ¿Qué es?</h3>
            <p>Es la validación oficial de los estudios realizados en UVM que otorga un <strong>reconocimiento equivalente en Estados Unidos</strong>.</p>

            <h3>🔄 ¿Cómo funciona?</h3>
            <p><strong>Una vez completado el programa</strong>, los egresados obtienen una acreditación que les permite ejercer y ser reconocidos tanto en México como en EE.UU.</p>

            <h3>🏆 Beneficio principal</h3>
            <p><strong>Aumenta la competitividad internacional del egresado</strong>, ampliando sus oportunidades laborales o trámites migratorios en Estados Unidos.</p>

            <h3>🌍 ¿Qué diferencia tiene con la Doble Titulación NLU?</h3>
            <h4>🇺🇸 Acreditación de Estudios en EE.UU.</h4>
            <ul>
                <li><strong>Qué es:</strong> Proceso mediante el cual tus estudios son evaluados y certificados en Estados Unidos a través de la agencia IEE, afiliada a NACES.</li>
                <li><strong>Beneficios:</strong> Te permite acceder a oportunidades académicas en universidades estadounidenses, mejorar tu perfil laboral en EE.UU. y facilitar el proceso de inmigración.</li>
                <li><strong>Objetivo:</strong> Reconocimiento de tus estudios para ampliar opciones académicas y laborales.</li>
            </ul>

            <h4>🗽 Doble Titulación con NLU</h4>
            <ul>
                <li><strong>Qué es:</strong> Programa que permite obtener dos títulos al completar tu Licenciatura, uno de UVM y otro de National Louis University.</li>
                <li><strong>Beneficios:</strong> Valor añadido al poseer dos títulos que son reconocidos internacionalmente, aumentando tus posibilidades en el mercado laboral tanto en México como en EE.UU.</li>
                <li><strong>Objetivo:</strong> Ampliar tus credenciales académicas y aumentar tu competitividad en el mercado laboral global.</li>
            </ul>

            <h3>💭 Resumen Demostrativo VC</h3>
            <p>🇺🇸 **Acreditación de Estudios en EE.UU.**</p>
            <ul>
                <li>Al terminar tu Licenciatura en línea, puedes solicitar la <strong>acreditación de estudios en EE.UU.</strong> a través de <strong>IEE</strong> (NACES). Esta certificación te permite continuar tus estudios en universidades americanas y mejorar tus oportunidades laborales.</li>
                <li><strong>🗂️ Reconocimiento internacional</strong> de tus estudios en EE.UU.</li>
                <li><strong>🚀 Oportunidades laborales y académicas</strong> en el extranjero.</li>
            </ul>

            <h3>💵 ¿Cuál es su costo?</h3>
            <p>Tiene un costo aproximado entre <strong>$10,000 - $20,000 MXN</strong>.</p>

            <h3>ℹ️ Q&A Básico</h3>
            <ul>
                <li><strong>¿Qué es la acreditación de estudios en Estados Unidos?</strong> La acreditación de estudios en Estados Unidos es un reconocimiento formal de que tu licenciatura cumple con los estándares educativos estadounidenses, facilitado por la agencia IEE.</li>
                <li><strong>¿Cuándo puedo solicitar la acreditación de estudios?</strong> Puedes solicitarla una vez que hayas concluido el programa de licenciatura y obtenido el 100% de los créditos, además de tener tu título.</li>
                <li><strong>¿Es una doble titulación?</strong> No, no es una doble titulación. Es una acreditación de estudios que certifica tus credenciales académicas según los estándares de Estados Unidos.</li>
                <li><strong>¿Cuánto tiempo toma obtener el certificado de acreditación?</strong> A diferencia de otras certificadoras, el certificado se entrega en un plazo de 7 a 10 días.</li>
                <li><strong>¿Debo realizar el trámite de manera presencial?</strong> No, el trámite no requiere de ir físicamente a ningún lugar. Todo el proceso se puede gestionar a distancia.</li>
                <li><strong>¿Qué programas de maestría no aplican para la acreditación de estudios en Estados Unidos?</strong> Las maestrías/licenciaturas en Derecho y Salud no aplican.</li>
                <li><strong>¿Cuál es la agencia que realiza la acreditación?</strong> La agencia encargada de la acreditación es IEE (International Education Evaluations), adscrita a NACES (National Association of Credential Evaluation Services).</li>
                <li><strong>¿Qué ventajas competitivas me ofrece esta acreditación?</strong> Te permite continuar tu formación en prestigiosas universidades americanas y ampliar tus opciones de inmigración y empleo formal en empresas de Estados Unidos.</li>
            </ul>
        `;
    }

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("infoModal").style.display = "flex";
    // Bloquear el scroll de la página principal
    document.body.classList.add("modal-open");
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
    // Restaurar el scroll de la página principal
    document.body.classList.remove("modal-open");
}


