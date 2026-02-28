/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { CheckCircle2, Circle, Info, BookOpen, Brain, Sparkles, GraduationCap, Download, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChecklistItem {
  id: string;
  label: string;
  points: number;
  category: string;
}

interface Section {
  title: string;
  icon: ReactNode;
  items: ChecklistItem[];
}

export default function App() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [totalScore, setTotalScore] = useState(0);
  const [studentName, setStudentName] = useState('');

  const sections: Section[] = [
    {
      title: "2. Teoría del Conocimiento (8 pts total)",
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      items: [
        // 2.1 Racionalismo (0.8 pts)
        { id: "2.1.1", label: "Criterio de certeza: la razón", points: 0.2, category: "Epistemología" },
        { id: "2.1.2", label: "Defensa de las ideas innatas", points: 0.2, category: "Epistemología" },
        { id: "2.1.3", label: "Matemáticas como referente", points: 0.2, category: "Epistemología" },
        { id: "2.1.4", label: "Rechazo del conocimiento sensorial", points: 0.2, category: "Epistemología" },
        // 2.2 Método (1.0 pts)
        { id: "2.2.0", label: "Objetivo: Verdad indudable", points: 0.2, category: "Epistemología" },
        { id: "2.2.1", label: "Regla 1: Evidencia", points: 0.2, category: "Epistemología" },
        { id: "2.2.2", label: "Regla 2: Análisis", points: 0.2, category: "Epistemología" },
        { id: "2.2.3", label: "Regla 3: Síntesis", points: 0.2, category: "Epistemología" },
        { id: "2.2.4", label: "Regla 4: Enumeración", points: 0.2, category: "Epistemología" },
        // 2.3 Intuición/Deducción (0.4 pts)
        { id: "2.3.1", label: "Definición de Intuición", points: 0.2, category: "Epistemología" },
        { id: "2.3.2", label: "Definición de Deducción", points: 0.2, category: "Epistemología" },
        // 2.4 Duda (1.4 pts)
        { id: "2.4.1", label: "Duda Universal, Provisional y Metódica", points: 0.6, category: "Epistemología" },
        { id: "2.4.2", label: "Motivo 1: Sentidos engañan", points: 0.2, category: "Epistemología" },
        { id: "2.4.3", label: "Motivo 2: Hipótesis del sueño", points: 0.2, category: "Epistemología" },
        { id: "2.4.4", label: "Motivo 3: Dios engañador", points: 0.2, category: "Epistemología" },
        { id: "2.4.5", label: "Motivo 4: Genio maligno", points: 0.2, category: "Epistemología" },
        // 2.5 Cogito (0.6 pts)
        { id: "2.5.1", label: "Pienso, luego existo (Cogito)", points: 0.2, category: "Epistemología" },
        { id: "2.5.2", label: "Resistencia a la duda", points: 0.2, category: "Epistemología" },
        { id: "2.5.3", label: "Existencia del pensamiento (Res cogitans)", points: 0.2, category: "Epistemología" },
        // 2.6 Ideas (0.6 pts)
        { id: "2.6.1", label: "Ideas Adventicias", points: 0.2, category: "Epistemología" },
        { id: "2.6.2", label: "Ideas Facticias", points: 0.2, category: "Epistemología" },
        { id: "2.6.3", label: "Ideas Innatas (Infinito/Perfección)", points: 0.2, category: "Epistemología" },
      ]
    },
    {
      title: "3. Metafísica (Cont. 8 pts total)",
      icon: <Brain className="w-5 h-5 text-emerald-500" />,
      items: [
        // 3.1 Dios (1.2 pts)
        { id: "3.1.1", label: "Prueba a partir de ideas innatas", points: 0.4, category: "Metafísica" },
        { id: "3.1.2", label: "Argumento Ontológico (San Anselmo)", points: 0.4, category: "Metafísica" },
        { id: "3.1.3", label: "Prueba Cosmológica (Causa de mi existencia)", points: 0.4, category: "Metafísica" },
        // 3.2 Papel de Dios (0.8 pts)
        { id: "3.2.1", label: "Garantía de verdad / Elimina genio maligno", points: 0.4, category: "Metafísica" },
        { id: "3.2.2", label: "Puente al mundo exterior", points: 0.4, category: "Metafísica" },
        // 3.3 Sustancias (1.2 pts)
        { id: "3.3.1", label: "Definición de Sustancia", points: 0.3, category: "Metafísica" },
        { id: "3.3.2", label: "Res Infinita (Dios)", points: 0.3, category: "Metafísica" },
        { id: "3.3.3", label: "Res Cogitans (Alma)", points: 0.3, category: "Metafísica" },
        { id: "3.3.4", label: "Res Extensa (Materia)", points: 0.3, category: "Metafísica" },
      ]
    },
    {
      title: "Vocabulario y Coherencia (2 pts)",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      items: [
        { id: "V.1", label: "Uso preciso de vocabulario filosófico", points: 1.0, category: "Escritura" },
        { id: "V.2", label: "Coherencia y cohesión del texto", points: 1.0, category: "Escritura" },
      ]
    },
    {
      title: "Análisis Adicional (2 pts)",
      icon: <GraduationCap className="w-5 h-5 text-rose-500" />,
      items: [
        { id: "A.1", label: "Contextualización histórica", points: 0.4, category: "Adicional" },
        { id: "A.2", label: "Vigencia del autor", points: 0.4, category: "Adicional" },
        { id: "A.3", label: "Relación con otros autores", points: 0.4, category: "Adicional" },
        { id: "A.4", label: "Otros conceptos importantes", points: 0.4, category: "Adicional" },
        { id: "A.5", label: "Otros elementos de valor", points: 0.4, category: "Adicional" },
      ]
    }
  ];

  useEffect(() => {
    let score = 0;
    Object.keys(checkedItems).forEach(id => {
      if (checkedItems[id]) {
        const item = sections.flatMap(s => s.items).find(i => i.id === id);
        if (item) score += item.points;
      }
    });
    setTotalScore(Math.min(12, Number(score.toFixed(2))));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getProgressColor = () => {
    if (totalScore >= 10) return "bg-emerald-500";
    if (totalScore >= 6) return "bg-amber-500";
    return "bg-rose-500";
  };

  const exportToTxt = () => {
    const date = new Date().toLocaleDateString();
    let content = `RESULTADOS DE EVALUACIÓN: DESCARTES\n`;
    content += `-----------------------------------\n`;
    content += `Alumno: ${studentName || 'No especificado'}\n`;
    content += `Fecha: ${date}\n`;
    content += `Puntuación Final: ${totalScore.toFixed(1)} / 12.0\n\n`;
    content += `DETALLE DE ÍTEMS:\n`;

    sections.forEach(section => {
      content += `\n[ ${section.title.toUpperCase()} ]\n`;
      section.items.forEach(item => {
        const isChecked = checkedItems[item.id];
        const mark = isChecked ? '✓' : 'x';
        content += `${item.label.padEnd(60)} [${mark}] (+${item.points.toFixed(1)})\n`;
      });
    });

    content += `\n-----------------------------------\n`;
    content += `© 2024 Departamento de Filosofía\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Evaluacion_Descartes_${studentName.replace(/\s+/g, '_') || 'Alumno'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-indigo-100">
      {/* Header Sticky */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-bottom border-zinc-200 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Lista de Cotejo: Descartes</h1>
            <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Evaluación de Contenidos Filosóficos</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 bg-zinc-900 text-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Nota Total</span>
                <span className="text-3xl font-mono font-bold">{totalScore.toFixed(1)}<span className="text-sm opacity-40 ml-1">/ 12.0</span></span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Progreso</span>
                <span className="text-xl font-mono font-bold">{Math.round((totalScore / 12) * 100)}%</span>
              </div>
            </div>
            
            <button 
              onClick={exportToTxt}
              className="p-3 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-colors shadow-sm group"
              title="Exportar a TXT"
            >
              <Download className="w-6 h-6 text-zinc-600 group-hover:text-zinc-900" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-4 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full ${getProgressColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${(totalScore / 12) * 100}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pb-24 space-y-8">
        {/* Student Name Input */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <User className="w-5 h-5" />
            <h3 className="font-bold tracking-tight">Identificación del Alumno</h3>
          </div>
          <input
            type="text"
            placeholder="Introduce tu nombre completo..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
          />
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-3 items-start">
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <p className="text-sm text-indigo-900 leading-relaxed">
            Utiliza esta lista para verificar que tu desarrollo del tema de Descartes incluye todos los elementos necesarios. 
            La puntuación máxima es de <strong>12 puntos</strong> (8 de contenido base + 2 de forma + 2 de análisis crítico).
          </p>
        </div>

        <div className="grid gap-8">
          {sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
                {section.icon}
                <h2 className="text-lg font-bold tracking-tight text-zinc-800 italic serif">{section.title}</h2>
              </div>
              
              <div className="grid gap-2">
                {section.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 4 }}
                    onClick={() => toggleItem(item.id)}
                    className={`
                      group flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer
                      ${checkedItems[item.id] 
                        ? 'bg-white border-zinc-900 shadow-sm' 
                        : 'bg-white border-zinc-100 hover:border-zinc-300'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        {checkedItems[item.id] ? (
                          <CheckCircle2 className="w-6 h-6 text-zinc-900" />
                        ) : (
                          <Circle className="w-6 h-6 text-zinc-200 group-hover:text-zinc-400" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${checkedItems[item.id] ? 'text-zinc-900' : 'text-zinc-600'}`}>
                        {item.label}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded-md ${checkedItems[item.id] ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-400'}`}>
                        +{item.points.toFixed(1)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-zinc-400">
          <span>Descartes: Discurso del Método & Meditaciones</span>
          <span>© 2024 Departamento de Filosofía</span>
        </div>
      </footer>
    </div>
  );
}
