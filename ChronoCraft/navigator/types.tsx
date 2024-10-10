// types.tsx (or include it directly in your AppNavigation file)
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Plans: undefined;
  PlanDetailScreen: undefined;
  ChronoScreen: undefined;
  AddPlanScreen: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList, 'Welcome'>;
