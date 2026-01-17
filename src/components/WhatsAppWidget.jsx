import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const { user } = useAuth();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // El globo de texto aparece solo a los 3 segundos para llamar la atención
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const telefono = "56912345678";
    const mensaje = user 
      ? `Hola AR+ Analytics, soy ${user.nombre.toUpperCase()}. Necesito asesoría.` 
      : "Hola, me gustaría recibir información sobre sus servicios.";

    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="whatsapp-container">
    
      {showNotification && (
        <div className="whatsapp-badge">
          {user ? `¡Hola ${user.nombre}! ¿Dudas con tus datos?` : "¿Necesitas ayuda profesional?"}
          <button className="close-badge" onClick={(e) => {
            e.stopPropagation();
            setShowNotification(false);
          }}>×</button>
        </div>
      )}
      
      
      <div className="whatsapp-float pulse" onClick={handleWhatsAppClick}>
        <FaWhatsapp size={32} />
      </div>
    </div>
  );
};

export default WhatsAppWidget;