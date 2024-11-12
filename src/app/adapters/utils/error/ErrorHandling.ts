import axios from 'axios';

export const errorHandling = (error: any): string => {
    if (axios.isCancel(error)) {
      console.log('Request was canceled by an interruption produced by the network:', error.message);
      return 'Solicitude canceled...';
    } else if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      return `Error: ${error.code}, description error: ${error.message}`;
    } else if (error instanceof Error) {
      console.error('Unexpected error:', error.message);
      return `Unexpected error has been produced: ${error.message}`;
    } else {
      console.error('Unknown error:', error);
      return 'Unknown error, try latter';
    }
  }
