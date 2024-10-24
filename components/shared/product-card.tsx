import Link from 'next/link'
import React from 'react'
import { Title } from './title';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountButton } from './count-button';


interface Props {
    className?: string;
    id: number;
    count?: number;
    name: string;
    imageUrl: string;
    price: number;
}

export const ProductCard: React.FC<Props> = ({ className, imageUrl, id, name, price, count }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-grey-400">Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b>
                    </span>
                    {count ? (
                        <CountButton value={count} size="lg" />
                    ) : (
                        <Button variant="secondary">
                            <Plus size={20} className=" mr-1" />
                            Добавить
                        </Button>
                    )}
                </div>
            </Link>
        </div>
    )
}


