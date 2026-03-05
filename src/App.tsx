import { useState } from "react";
import {
  Menu,
  X,
  CheckCircle,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ChevronRight,
  Award,
  Users,
  Calendar,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [objetivo, setObjetivo] = useState("Perda de Peso");

  const enviarWhatsApp = () => {
    const numero = "+5521979230151"; // número do personal sem espaços

    if(!nome || !telefone) {
      alert("Por favor, preenche o nome e telefone.");
      return;
    }

    const mensagem = `
💪 Novo contato pelo site

👤 Nome: ${nome}
📱 Telefone: ${telefone}
🎯 Objetivo: ${objetivo}
`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className=" min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* ── NAV ── */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-stone-900">
              André Dieyson <br />{" "}
              <span className="text-orange-600">Personal Trainer</span>
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-8 items-center">
              {["sobre", "servicos", "testemunhos"].map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="text-sm font-medium capitalize hover:text-orange-600 transition-colors"
                >
                  {s === "testemunhos"
                    ? "Resultados"
                    : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contacto")}
                className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-105"
              >
                Começar Agora
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-900"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="flex flex-col divide-y divide-stone-100">
              {[
                { id: "sobre", label: "Sobre" },
                { id: "servicos", label: "Serviços" },
                { id: "testemunhos", label: "Resultados" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-6 py-4 text-base font-medium hover:bg-stone-50 transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contacto")}
                className="w-full text-left px-6 py-4 text-base font-bold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase mb-5 md:mb-6">
              Transformação Real & Sustentável
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-stone-900 leading-[1.1] mb-6 md:mb-8">
              Treina com propósito. <br className="hidden sm:block" />
              <span className="text-orange-600">Vive com energia.</span>
            </h1>
            <p className="text-base md:text-xl text-stone-600 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              Não é apenas sobre estética. É sobre performance, saúde mental e
              longevidade. Criamos um plano adaptado à tua rotina, não o
              contrário.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo("contacto")}
                className="flex items-center justify-center bg-stone-900 text-white px-6 py-4 rounded-xl text-base md:text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-stone-200"
              >
                Marcar Consulta Grátis
                <ChevronRight className="ml-2 shrink-0" size={20} />
              </button>
              <button
                onClick={() => scrollTo("servicos")}
                className="flex items-center justify-center border-2 border-stone-200 bg-transparent text-stone-900 px-6 py-4 rounded-xl text-base md:text-lg font-bold hover:bg-stone-100 transition-all"
              >
                Ver Planos
              </button>
            </div>

            <div className="mt-10 md:mt-12 flex items-center space-x-4 grayscale opacity-60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-stone-300"
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm font-medium text-stone-500">
                +200 alunos transformados no Rio de Janeiro
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bg — only large screens */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -z-10 hidden lg:block rounded-l-[100px]" />
      </section>

      {/* ── STATS ── */}
      <section className="py-10 md:py-12 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: "10+", label: "Anos XP" },
              { value: "500+", label: "Treinos/Mês" },
              { value: "98%", label: "Satisfação" },
              { value: "15kg", label: "Média Perda" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl md:text-3xl font-black text-stone-900">
                  {value}
                </p>
                <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider font-bold mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div className="aspect-[4/5] bg-stone-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white">
                <img src="/andre.jpg" alt="André Dieyson" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-orange-600 text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest mb-1">
                  André Dieyson
                </p>
                <p className="text-lg md:text-2xl font-black">
                  Personal Trainer
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-5 md:mb-6">
                O meu compromisso é o teu resultado.
              </h2>
              <p className="text-base md:text-lg text-stone-600 mb-7 md:mb-8 leading-relaxed">
                Olá, sou o <strong>André Dieyson</strong>. Especialista em
                recomposição corporal e treino de força. Acredito que o fitness
                deve simplificar a tua vida, não complicá-la. O meu método
                baseia-se em ciência, sem dietas restritivas ou treinos
                intermináveis.
              </p>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {[
                  "Treino adaptado ao teu nível de experiência",
                  "Acompanhamento nutricional flexível",
                  "Suporte 24/7 via WhatsApp",
                  "Análise mensal de progresso",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-orange-600 shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="font-medium text-stone-800 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6">
                <Award className="text-stone-400" size={28} />
                <Users className="text-stone-400" size={28} />
                <Calendar className="text-stone-400" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3 md:mb-4">
            Escolhe o teu caminho.
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base">
            Opções flexíveis para quem treina em casa, no ginásio ou prefere
            acompanhamento presencial exclusivo.
          </p>
        </div>

        {/* Cards — stack on mobile, side-by-side on md+ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Card 1 */}
          <div className="p-7 md:p-8 rounded-3xl border border-stone-100 bg-stone-50 hover:border-orange-200 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Users size={26} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              PT Presencial
            </h3>
            <p className="text-stone-600 mb-4 md:mb-6 text-sm md:text-base">
              Sessões 1-para-1 com foco total na técnica e motivação. No ginásio
              ou ao domicílio.
            </p>
            <p className="text-stone-400 text-sm italic mb-5 md:mb-6">
              a consultar
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="w-full py-3 text-stone-900 font-bold border-b-2 border-stone-200 hover:border-orange-600 transition-colors text-left flex items-center justify-between text-sm md:text-base"
            >
              Saber mais <ChevronRight size={18} />
            </button>
          </div>

          {/* Card 2 — destacado, sem translate negativo em mobile */}
          <div className="p-7 md:p-8 rounded-3xl bg-stone-900 text-white shadow-2xl md:-translate-y-4 border border-stone-800">
            <div className="inline-block py-1 px-3 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase mb-5 md:mb-6">
              Mais Popular
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-lg text-white">
              <Calendar size={26} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Consultoria Online
            </h3>
            <p className="text-stone-400 mb-4 md:mb-6 text-sm md:text-base">
              Acesso à App exclusiva com vídeos, plano de treino e dieta. Ideal
              para quem tem autonomia.
            </p>
            <p className="text-stone-300 text-sm italic mb-5 md:mb-6">
              Apenas R$ 99,99 / mês
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="w-full py-3 md:py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20 text-sm md:text-base"
            >
              Inscrever agora
            </button>
          </div>

          {/* Card 3 */}
          {/* <div className="p-7 md:p-8 rounded-3xl border border-stone-100 bg-stone-50 hover:border-orange-200 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Award size={26} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Plano Elite
            </h3>
            <p className="text-stone-600 mb-4 md:mb-6 text-sm md:text-base">
              Treino, nutrição e análise de exames. Acompanhamento diário para
              objetivos de alta performance.
            </p>
            <p className="text-stone-400 text-sm italic mb-5 md:mb-6">
              Sob consulta
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="w-full py-3 text-stone-900 font-bold border-b-2 border-stone-200 hover:border-orange-600 transition-colors text-left flex items-center justify-between text-sm md:text-base"
            >
              Saber mais <ChevronRight size={18} />
            </button>
          </div> */}
        </div>
      </section>

      {/* ── TESTEMUNHOS ── */}
      <section id="testemunhos" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3 md:mb-4">
              Resultados que falam por si.
            </h2>
            <p className="text-stone-500 text-sm md:text-base">
              Pessoas reais, vidas transformadas. O próximo podes ser tu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                name: "Gustavo Santos",
                result: "Perdeu 8kg em 4 meses",
                photo: "/testo1.jpg",
                quote:
                  "O André mudou a minha perspectiva sobre o ginásio. Antes via como uma obrigação, agora é a melhor parte do meu dia. Os resultados vieram naturalmente com o plano que ele traçou.",
              },
              {
                name: "Santiago Ferreira",
                result: "Ganhou 4kg de massa muscular",
                photo: "/image.png",
                quote:
                  "O apoio constante faz toda a diferença. O plano alimentar é super variado e nunca passo fome. Sinto-me mais forte e confiante do que nunca.",
              },
            ].map(({ name, result, quote, photo }) => (
              <div
                key={name}
                className="bg-white p-7 md:p-8 rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="flex items-center mb-5 md:mb-6">
                  <div/>
                  <img
                    src={photo}
                    alt={name}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover mr-4 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm md:text-base">
                      {name}
                    </h4>
                    <p className="text-xs md:text-sm text-stone-400">
                      {result}
                    </p>
                  </div>
                </div>
                <p className="text-stone-600 italic leading-relaxed text-sm md:text-base">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-[32px] md:rounded-[40px] p-7 sm:p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 shadow-2xl">
            {/* Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 md:mb-8 leading-tight">
                Estás pronto para começar?
              </h2>
              <p className="text-stone-400 text-base md:text-lg mb-8 md:mb-12">
                Preenche o formulário e entrarei em contacto contigo nas
                próximas 24 horas para agendar a tua avaliação gratuita.
              </p>

              <div className="space-y-5 md:space-y-6">
                {[
                  { icon: Mail, text: "andre.fit@email.com" },
                  { icon: Phone, text: "21 97923-0151" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-orange-600" />
                    </div>
                    <span className="text-stone-300 text-sm md:text-base">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-12 flex space-x-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-stone-800 rounded-full hover:bg-orange-600 transition-all"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-stone-900 shadow-xl">
              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="O teu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm md:text-base"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Telemóvel
                  </label>
                  <input
                    type="tel"
                    placeholder="(DDD) 9xxxx-xxxx"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm md:text-base"
                  />
                </div>

                {/* Objetivo */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Objetivo Principal
                  </label>
                  <select
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all bg-white text-sm md:text-base"
                  >
                    <option>Perda de Peso</option>
                    <option>Ganho de Massa</option>
                    <option>Performance / Saúde</option>
                    <option>Outro</option>
                  </select>
                </div>

                {/* Botão */}
                <div className="pt-2 md:pt-4">
                  <button
                    onClick={enviarWhatsApp}
                    className="w-full bg-orange-600 text-white py-3.5 md:py-4 rounded-xl font-black text-base md:text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30"
                  >
                    Enviar Candidatura
                  </button>
                </div>

                <p className="text-[10px] text-center text-stone-400 leading-relaxed uppercase tracking-tighter">
                  Ao enviar, concordas com a nossa política de privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 md:py-12 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
          <span className="text-xl font-black tracking-tighter text-stone-900">
            André Dieyson <span className="text-orange-600">Personal Trainer</span>
          </span>
          <p className="text-stone-500 text-xs md:text-sm order-last md:order-none">
            © 2026 André Dieyson Personal Trainer. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors">
              Termos
            </a>
            <p className="text-stone-400 text-[9px] max-w-lg mx-auto leading-relaxed uppercase tracking-tighter font-medium">
              Site desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/santiago-ferreira-6964a9173"
                className="text-orange-700 font-bold hover:underline"
              >
                Santiago Dev
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
