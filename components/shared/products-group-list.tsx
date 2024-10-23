
'use client'

import React, { useEffect, useRef } from 'react'
import { Title } from './title';
import { useIntersection } from 'react-use'
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import { categoryModel } from '@/store/category-model';
import { useUnit } from 'effector-react';

interface Props {
    className?: string;
    title: string;
    items: any[];
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, listClassName, categoryId }) => {
    const { setIdActivated } = useUnit(categoryModel)

    const intersectionRef = useRef(null)

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setIdActivated(categoryId)
        }

    }, [intersection?.isIntersecting,])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}

                    />
                ))}
            </div>
        </div>
    )
}


