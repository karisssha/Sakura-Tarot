import { render, screen, waitFor } from '@testing-library/react';
import Read from './src/pages/read/Read';
import '@testing-library/jest-dom';


jest.mock('../../components/buttons/save/ButtonSaveReading', () => () => <button>Save</button>);
jest.mock('../../components/buttons/history/ButtonSeeHistory', () => () => <button>History</button>);
jest.mock('../../components/date/DateDisplay', () => () => <div>Date</div>);
jest.mock('../../components/nickName/nickName', () => () => <div>Nickname</div>);

describe('Read Component', () => {

  beforeEach(() => {
    
    localStorage.clear();
  });

  it('should render correctly without selected cards', () => {
    render(<Read />);

    
    expect(screen.getByText('Nickname')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();

    
    expect(screen.getByText('No cards selected')).toBeInTheDocument();

    
    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('should render cards correctly when there are selected cards', async () => {
    const mockCards = [
      { sakuraCard: 'past.jpg', englishName: 'Past Card', meaning: 'Past meaning' },
      { sakuraCard: 'present.jpg', englishName: 'Present Card', meaning: 'Present meaning' },
      { sakuraCard: 'future.jpg', englishName: 'Future Card', meaning: 'Future meaning' },
    ];
    localStorage.setItem('selectedCards', JSON.stringify(mockCards));

    render(<Read />);

    await waitFor(() => {
      expect(screen.getByText('Past Card')).toBeInTheDocument();
      expect(screen.getByText('Present Card')).toBeInTheDocument();
      expect(screen.getByText('Future Card')).toBeInTheDocument();

      
      expect(screen.getByText('PAST')).toBeInTheDocument();
      expect(screen.getByText('PRESENT')).toBeInTheDocument();
      expect(screen.getByText('FUTURE')).toBeInTheDocument();
    });

    
    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});
