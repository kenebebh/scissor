import {render, screen, cleanup } from '@testing-library/react';
import Faqs from '../Faqs';

afterEach(() => {
    cleanup();
}
);

test('should render Faqs component', () => {
    render(<Faqs />);
    const FaqsElement = screen.getByTestId('faqs-1');
    expect(FaqsElement).toBeInTheDocument();
    expect(FaqsElement).toHaveTextContent('FAQs');
}
);