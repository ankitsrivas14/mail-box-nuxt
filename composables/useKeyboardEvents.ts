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

  const addListener = () => window.addEventListener('keydown', handleKeyPress);
  const removeListener = () => window.removeEventListener('keydown', handleKeyPress);

  onMounted(() => {
    addListener();
  });

  onUnmounted(() => {
    removeListener();
  });

  return {
    handleKeyPress,
    addListener,
    removeListener
  }
}
