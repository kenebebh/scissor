import {render, screen, cleanup } from '@testing-library/react';
import Barcode from '../Barcode'; 


afterEach(() => {
    cleanup();
});

test('should render Barcode component', () => {
    render(<Barcode />);
    const BarcodeElement = screen.getByTestId('barcode-1');
    expect(BarcodeElement).toBeInTheDocument();
    expect(BarcodeElement).toHaveTextContent('QRCode Generator');
})

test('should have text content of copied link', () => {
    render(<Barcode />);
    const BarcodeElement = screen.getByTestId('barcode-2');
    expect(BarcodeElement).toBeInTheDocument();
    expect(BarcodeElement).toHaveTextContent('Enter the copied link to get your Barcode');
}
)