import React, { useState } from 'react';
import { BookOpen, Users, DollarSign, Briefcase, Package, Link, MessageSquare, TrendingUp, Settings } from 'lucide-react';

const BusinessModelCanvas = () => {
  const [activeBlock, setActiveBlock] = useState<keyof typeof blocks | null>(null);

  const blocks = {
    socios: {
      title: "Red de Socios Estratégicos",
      icon: Link,
      color: "bg-purple-50 border-purple-300",
      content: [
        "• Profesores/Tutores independientes (P): Estudiantes avanzados y profesionales con conocimientos sólidos en matemáticas y otras materias",
        "• Plataforma Zoom: Para videoconferencias en tiempo real",
        "• Proveedores de hosting y servicios cloud",
        "• Universidad UDH: Como aliado institucional potencial para validación y acceso al mercado",
        "• Futuros colegios de la región para expansión"
      ]
    },
    actividades: {
      title: "Actividades Clave",
      icon: Settings,
      color: "bg-blue-50 border-blue-300",
      content: [
        "• Reclutamiento y validación de profesores (P) por parte del Moderador (M)",
        "• Gestión del sistema de matching entre problemas y profesores disponibles",
        "• Coordinación de sesiones virtuales (creación de enlaces Zoom)",
        "• Moderación de calidad del servicio",
        "• Procesamiento de pagos y distribución de ingresos",
        "• Marketing digital hacia estudiantes de UDH",
        "• Mantenimiento y desarrollo continuo de la plataforma",
        "• Atención al cliente y resolución de incidencias"
      ]
    },
    recursos: {
      title: "Recursos Clave",
      icon: Package,
      color: "bg-green-50 border-green-300",
      content: [
        "• Plataforma tecnológica (app/sistema en fase final de despliegue)",
        "• Equipo de 5 fundadores (2 como Intermediarios y Moderadores)",
        "• Base inicial de 3+ profesores capacitados",
        "• Infraestructura tecnológica: hosting, servidores",
        "• Cuentas Zoom para videoconferencias",
        "• Sistema de pagos digital",
        "• Capital inicial propio para operación",
        "• Know-how del proceso de resolución bajo demanda"
      ]
    },
    propuesta: {
      title: "Propuesta de Valor",
      icon: BookOpen,
      color: "bg-yellow-50 border-yellow-300",
      content: [
        "✓ Resolución de ejercicios matemáticos en tiempo real (35 min aprox.)",
        "✓ Sin horarios fijos: disponibilidad flexible según demanda",
        "✓ Método personalizado: se resuelve TU problema específico, no clases genéricas",
        "✓ Accesible desde cualquier lugar (100% virtual)",
        "✓ Precios competitivos: S/2 - S/6 por ejercicio",
        "✓ Explicación cara a cara por videoconferencia",
        "✓ Profesores competitivos seleccionados por mejor precio",
        "✓ Proceso rápido y dinámico: desde consulta hasta resolución",
        "Diferenciación: NO somos una academia tradicional, somos un marketplace de soluciones académicas bajo demanda"
      ]
    },
    relaciones: {
      title: "Relaciones con Clientes",
      icon: MessageSquare,
      color: "bg-pink-50 border-pink-300",
      content: [
        "• Asistencia personalizada vía Intermediario (I) para recepción de problemas",
        "• Comunicación directa estudiante-profesor durante sesión Zoom",
        "• Soporte por chat/WhatsApp para dudas y seguimiento",
        "• Sistema de rating/feedback para mejorar calidad",
        "• Comunidad de usuarios (potencial)",
        "• Seguimiento post-sesión para garantizar satisfacción",
        "• Relación bajo demanda: el cliente decide cuándo y cuánto usar el servicio"
      ]
    },
    segmentos: {
      title: "Segmentos de Clientes",
      icon: Users,
      color: "bg-red-50 border-red-300",
      content: [
        "SEGMENTO PRIMARIO:",
        "• Estudiantes de Ingeniería de UDH (ciclos iniciales 1-4)",
        "• Cursos: Cálculo I, II, III, Álgebra, Geometría",
        "• Edad: 17-22 años",
        "• Perfil: Con base matemática deficiente, frustrados con métodos tradicionales",
        "",
        "SEGMENTO SECUNDARIO:",
        "• Estudiantes de otras facultades con cursos de matemáticas",
        "• Estudiantes que buscan apoyo puntual antes de exámenes",
        "",
        "EXPANSIÓN FUTURA:",
        "• Colegios de la región Huánuco",
        "• Otras universidades"
      ]
    },
    canales: {
      title: "Canales de Distribución",
      icon: TrendingUp,
      color: "bg-teal-50 border-teal-300",
      content: [
        "• Plataforma digital propia (app/web)",
        "• WhatsApp/Telegram para contacto inicial con Intermediario",
        "• Zoom para entrega del servicio (sesiones de resolución)",
        "• Redes sociales (Facebook, Instagram, TikTok) para captación",
        "• Marketing boca a boca dentro de UDH",
        "• Grupos de WhatsApp de estudiantes universitarios",
        "• Publicidad en campus universitario (carteles, volantes)",
        "• Convenios futuros con centros educativos"
      ]
    },
    ingresos: {
      title: "Fuentes de Ingreso",
      icon: DollarSign,
      color: "bg-green-100 border-green-400",
      content: [
        "MODELO DE COBRO POR SERVICIO:",
        "• Precio al usuario final: S/2 - S/6 por ejercicio",
        "• Estructura: Precio profesor (S/1-5) + S/1 comisión plataforma",
        "",
        "Ejemplo: Si profesor cobra S/3, usuario paga S/4",
        "• S/3 → Profesor (P)",
        "• S/1 → Plataforma (dividido entre I, M, operación)",
        "",
        "MODELO DE INGRESOS:",
        "• Pago por transacción completada",
        "• Potencial modelo freemium: primera consulta gratis",
        "• Paquetes futuros: 5, 10, 20 ejercicios con descuento",
        "• Suscripciones mensuales (futuro)"
      ]
    },
    costos: {
      title: "Estructura de Costos",
      icon: Briefcase,
      color: "bg-orange-50 border-orange-300",
      content: [
        "COSTOS FIJOS MENSUALES:",
        "• Hosting y servicios cloud: S/50-150/mes",
        "• Cuentas Zoom Pro: S/60-100/mes",
        "• Marketing digital básico: S/100-300/mes",
        "• Dominio y SSL: S/20/mes",
        "",
        "COSTOS VARIABLES:",
        "• Pago a profesores: 75-83% del precio por ejercicio",
        "• Comisiones de pasarela de pago: 3-4% por transacción",
        "",
        "COSTOS INICIALES (YA CUBIERTOS):",
        "• Desarrollo de la plataforma",
        "• Capital de trabajo inicial",
        "",
        "Total estimado operación mensual: S/500-800 (fase inicial)"
      ]
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Modelo de Negocios Canvas</h1>
          <h2 className="text-2xl text-slate-600">Plataforma de Resolución Académica UDH</h2>
          <p className="text-slate-500 mt-2">Marketplace de soluciones matemáticas bajo demanda</p>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {/* Fila 1 */}
          <div className="col-span-1">
            <BlockCard 
              block={blocks.socios}
              isActive={activeBlock === 'socios'}
              onClick={() => setActiveBlock(activeBlock === 'socios' ? null : 'socios')}
            />
          </div>
          <div className="col-span-1">
            <BlockCard 
              block={blocks.actividades}
              isActive={activeBlock === 'actividades'}
              onClick={() => setActiveBlock(activeBlock === 'actividades' ? null : 'actividades')}
            />
          </div>
          <div className="col-span-1">
            <BlockCard 
              block={blocks.propuesta}
              isActive={activeBlock === 'propuesta'}
              onClick={() => setActiveBlock(activeBlock === 'propuesta' ? null : 'propuesta')}
            />
          </div>
          <div className="col-span-1">
            <BlockCard 
              block={blocks.relaciones}
              isActive={activeBlock === 'relaciones'}
              onClick={() => setActiveBlock(activeBlock === 'relaciones' ? null : 'relaciones')}
            />
          </div>
          <div className="col-span-1">
            <BlockCard 
              block={blocks.segmentos}
              isActive={activeBlock === 'segmentos'}
              onClick={() => setActiveBlock(activeBlock === 'segmentos' ? null : 'segmentos')}
            />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {/* Fila 2 */}
          <div className="col-span-1">
            <BlockCard 
              block={blocks.recursos}
              isActive={activeBlock === 'recursos'}
              onClick={() => setActiveBlock(activeBlock === 'recursos' ? null : 'recursos')}
            />
          </div>
          <div className="col-span-2">
            <BlockCard 
              block={blocks.canales}
              isActive={activeBlock === 'canales'}
              onClick={() => setActiveBlock(activeBlock === 'canales' ? null : 'canales')}
            />
          </div>
          <div className="col-span-2">
            <BlockCard 
              block={blocks.ingresos}
              isActive={activeBlock === 'ingresos'}
              onClick={() => setActiveBlock(activeBlock === 'ingresos' ? null : 'ingresos')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <BlockCard 
            block={blocks.costos}
            isActive={activeBlock === 'costos'}
            onClick={() => setActiveBlock(activeBlock === 'costos' ? null : 'costos')}
          />
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">💡 Ventaja Competitiva Clave</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Velocidad</h4>
              <p className="text-sm text-slate-700">35 minutos desde contacto hasta solución completa</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Personalización</h4>
              <p className="text-sm text-slate-700">Tu problema específico, no clases genéricas</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Flexibilidad</h4>
              <p className="text-sm text-slate-700">Sin horarios fijos, disponible 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Block = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  content: string[];
};

type BlockCardProps = {
  block: Block;
  isActive: boolean;
  onClick: () => void;
};

const BlockCard: React.FC<BlockCardProps> = ({ block, isActive, onClick }) => {
  const Icon = block.icon;
  
  return (
    <div 
      onClick={onClick}
      className={`${block.color} border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isActive ? 'ring-4 ring-blue-400 scale-105' : ''
      } h-full`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5" />
        <h3 className="font-bold text-sm">{block.title}</h3>
      </div>
      <div className="text-xs space-y-1">
        {block.content.map((item, idx) => (
          <p key={idx} className={item === '' ? 'h-2' : ''}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
