import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import PropTypes from 'prop-types';

function AvatarUploader({ current, onUpload }) {
    const fileRef = useRef();
    const [preview, setPreview] = useState(current);
    const [error, setError] = useState('');

    const handleClick = () => fileRef.current.click();

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Проверяем размер файла (максимум 2MB)
        const maxSize = 2 * 1024 * 1024; // 2MB
        if (file.size > maxSize) {
            setError('Файл слишком большой. Максимальный размер: 2MB');
            return;
        }

        // Проверяем тип файла
        if (!file.type.startsWith('image/')) {
            setError('Пожалуйста, выберите изображение');
            return;
        }

        setError('');
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            // Проверяем размер base64 строки (примерно 4/3 от размера файла)
            if (result.length > 3000000) { // ~2.2MB в base64
                setError('Изображение слишком большое после обработки');
                return;
            }
            setPreview(result);
            onUpload(result);
        };
        reader.onerror = () => {
            setError('Ошибка при чтении файла');
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="avatar-uploader-wrapper">
            <div className="avatar-uploader" onClick={handleClick} title="Click to change avatar">
                {preview ? (
                    <img src={preview} alt="avatar" />
                ) : (
                    <div className="placeholder"><Camera size={32} /></div>
                )}
                <input type="file" accept="image/*" hidden ref={fileRef} onChange={handleChange} />
            </div>
            {error && (
                <div className="avatar-error">
                    {error}
                </div>
            )}
        </div>
    );
}

AvatarUploader.propTypes = {
    current: PropTypes.string,
    onUpload: PropTypes.func.isRequired,
};

export default AvatarUploader; 