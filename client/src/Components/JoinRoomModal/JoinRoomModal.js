import "./JoinRoomModal.css";
import { motion } from "framer-motion";

const backgrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: "00px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const JoinRoomModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <motion.div
          className="joinRoomModal-container"
          variants={backgrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div className="joinRoomModal-card" variants={modal}>
            <h1 className="joinRoomModal-card-title">Enter a room code</h1>
            <input
              className="joinRoomModal-card-input"
              type="number"
              placeholder="eg: 1212"
            />
            <button
              onClick={() => setShowModal(false)}
              className="joinRoomModal-card-button"
            >
              Save
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default JoinRoomModal;
