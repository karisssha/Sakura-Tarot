import { render, screen, waitFor } from '@testing-library/react';
import Read from './Read';
import { vi } from 'vitest';


vi.mock("../../components/buttons/save/ButtonSaveReading", () => ({
  __esModule: true,
  default: () => <button>Save Reading</button>,
}));

vi.mock("../../components/buttons/history/ButtonSeeHistory", () => ({
  __esModule: true,
  default: () => <button>See History</button>,
}));

vi.mock("../../components/date/DateDisplay", () => ({
  __esModule: true,
  default: () => <div>Date Display</div>,
}));

vi.mock("../../components/nickName/nickName", () => ({
  __esModule: true,
  default: () => <div>Nickname Display</div>,
}));

describe('Read Component', () => {
  
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly without cards', () => {
    render(<Read />);

    
    expect(screen.getByText('Nickname Display')).toBeInTheDocument();
    expect(screen.getByText('Date Display')).toBeInTheDocument();
    
    
    expect(screen.getByText('No cards selected')).toBeInTheDocument();

   
    expect(screen.getByText('See History')).toBeInTheDocument();
    expect(screen.getByText('Save Reading')).toBeInTheDocument();
  });

  it('renders selected cards from localStorage', () => {
    const mockCards = [
      {
        sakuraCard: 'image1.jpg',
        englishName: 'Card 1',
        meaning: 'Past card meaning',
      },
      {
        sakuraCard: 'image2.jpg',
        englishName: 'Card 2',
        meaning: 'Present card meaning',
      },
    ];

    
    localStorage.setItem('selectedCards', JSON.stringify(mockCards));

    render(<Read />);

    
    expect(screen.getByText('PAST')).toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Present')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    
    
    expect(screen.queryByText('No cards selected')).not.toBeInTheDocument();
  });

  it('handles empty localStorage gracefully', () => {
    
    localStorage.setItem('selectedCards', JSON.stringify([]));

    render(<Read />);

    
    expect(screen.getByText('No cards selected')).toBeInTheDocument();
  });
});
