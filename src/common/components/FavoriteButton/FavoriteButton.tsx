import s from './FavoriteButton.module.css';

type FavoriteButtonProps = {
    isFavorite: boolean;
    onToggle: () => void;
    className?: string;
}

export const FavoriteButton = ({
                                   isFavorite,
                                   onToggle,
                                   className,
                               }: FavoriteButtonProps) => {
    return (
        <button
            className={`${className} ${isFavorite ? s.active : ''}`}
            onClick={onToggle}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={s.icon}
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={isFavorite ? 0 : 2}
            >
                <path
                    d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </button>
    );
};