import { motion } from 'framer-motion';
import cableway1 from '../assets/cableway1.png';
import cableway2 from '../assets/cableway2.png';
import cableway3 from '../assets/cableway3.png';
import f1tenth1 from '../assets/f1tenth1.jpg';
import f1tenth2 from '../assets/f1tenth2.jpg';
import f1tenth3 from '../assets/f1tenthvid.mp4';



const GalleryModal = ({ projectTitle, onClose }) => {
  const projectMedia = {
    "Cableway Inspection Report GUI": [
        { type: 'image', src: cableway1 },
        { type: 'image', src: cableway2 },
        { type: 'image', src: cableway3 },
    ],
    "F1tenth Autonomous Driving Algorithm":[
        { type: 'image', src: f1tenth1 },
        { type: 'image', src: f1tenth2 },
        { type: 'video', src: f1tenth3 },
    ]
  };

  return (
    <motion.div 
      className="gallery-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>{projectTitle}</h3>
        <div className="media-grid">
          {projectMedia[projectTitle]?.map((media, index) => (
            <div key={index} className="media-item">
              {media.type === 'image' ? (
                <img src={media.src} alt={`${projectTitle} screenshot ${index + 1}`} />
              ) : (
                <video controls>
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryModal;