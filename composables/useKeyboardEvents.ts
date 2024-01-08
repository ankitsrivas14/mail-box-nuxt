import { ref, onMounted, onUnmounted } from 'vue';

interface KeyboardEvents {
  [key: string]: () => void;
}

export function useKeyboardEvents(events: KeyboardEvents) {
  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (events[key]) {
      events[key]();
    }
  };

  const addListner = () => window.addEventListener('keydown', handleKeyPress);
  const removeListner = () => window.removeEventListener('keydown', handleKeyPress);

  onMounted(() => {
    addListner();
  });

  onUnmounted(() => {
    removeListner();
  });

  return {
    handleKeyPress,
    addListner,
    removeListner
  }
}
