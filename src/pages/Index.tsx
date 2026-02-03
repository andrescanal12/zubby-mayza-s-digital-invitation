import { motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import Sparkles from "@/components/Sparkles";
import invitationImage from "@/assets/invitation-zubby.jpeg";

const Index = () => {
  const handleClick = () => {
    window.open(
      "https://invitacion-15-años-zubby-mayza.my.canva.site/invitacion-15-zubby-mayza",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-gradient-to-b from-sky-light via-background to-sky-light">
      <FloatingPetals />

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-sky/30 to-transparent rounded-br-full" />
      <div className="fixed top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-sky/30 to-transparent rounded-bl-full" />
      <div className="fixed bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-sky/30 to-transparent rounded-tr-full" />
      <div className="fixed bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tl from-sky/30 to-transparent rounded-tl-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.img
            src="/crown.png"
            alt="Corona"
            className="w-24 h-auto mb-4 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl text-navy font-script text-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Invitación XV Años
          </motion.h1>
          <motion.div
            className="w-24 h-0.5 bg-gold/50 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>

        {/* Main card container */}
        <motion.div
          className="invitation-card gold-border p-2 md:p-3 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
        >
          <Sparkles />

          {/* Inner content */}
          <div className="relative bg-card rounded-xl overflow-hidden">
            {/* Image */}
            <motion.img
              src={invitationImage}
              alt="Invitación 15 años Zubby Mayza"
              className="w-full h-auto object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-500 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-card/95 backdrop-blur-sm px-6 py-3 rounded-full gold-border flex items-center gap-2">
                  <span className="text-navy font-elegant text-lg">Abrir Invitación</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-gold text-xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-6 text-muted-foreground font-elegant text-sm md:text-base"
        >
          ✨ Haz clic en la imagen para ver la invitación completa ✨
        </motion.p>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="fixed top-1/4 left-8 text-4xl opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🌸
      </motion.div>
      <motion.div
        className="fixed top-1/3 right-8 text-3xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        💐
      </motion.div>
      <motion.div
        className="fixed bottom-1/4 left-12 text-3xl opacity-20"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        🌷
      </motion.div>
      <motion.div
        className="fixed bottom-1/3 right-12 text-4xl opacity-20"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🌹
      </motion.div>
    </div>
  );
};

export default Index;
