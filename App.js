import { StyleSheet} from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppContent } from './src/app/AppContent';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
