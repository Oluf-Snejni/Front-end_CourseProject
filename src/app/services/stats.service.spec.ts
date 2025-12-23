import { describe, it, expect } from 'vitest';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(() => {
    service = new StatsService();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate WPM correctly', () => {
    const wpm = service.calculateWPM(50, 60); 
    expect(wpm).toBe(10); 
  });
});
