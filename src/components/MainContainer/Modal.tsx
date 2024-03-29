import { SubjectInterface } from "../../interfaces/SubjectInterfaces"

interface ModalProps {
    modalInfo?: SubjectInterface
    handleCloseModal: () => void
}

const Modal: React.FC<ModalProps> = ({ modalInfo, handleCloseModal }) => {
    return (
        <div className="h-full w-full top-0 right-0 absolute flex justify-center items-center">
            <div className="bg-gray-500 opacity-90 h-full w-full absolute"></div>
            <div className="w-[576px] bg-white rounded-lg flex flex-col gap-8 p-8 relative">
                <div className="flex justify-between items-center">
                    <p className="font-primary font-medium text-base">Detalle asignatura</p>
                    <button onClick={handleCloseModal}>X</button>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Asignatura</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.nombre}</p>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Tipo de asignatura</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.tipo}</p>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Curso</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.curso}</p>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Grupo</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.grupo}</p>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Horas</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.horas_semana}</p>
                </div>
                <div>
                    <p className="font-primary font-normal text-sm">Espacio</p>
                    <p className="font-primary font-semibold text-base mt-2">{modalInfo?.espacio_regular}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
