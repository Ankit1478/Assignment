
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

export const Feedback = () => {
    return (
        <div>
            <h1 className="text-3xl">Please submit Your Feedback</h1>
            <FeedbackForm></FeedbackForm>
            <FeedbackList category="Product Features" />
            <FeedbackList category="Product Pricing" />
            <FeedbackList category="Product Usability" />
        </div>
    );
};

