'use client';
import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';


type Item = FilterCheckboxProps;

export interface CheckboxFiltersGroupProps {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    className?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = (props) => {

    const { title, items, defaultItems, limit = 5, searchInputPlaceholder = 'Поиск...', className, onChange, defaultValue } = props;

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit)


    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && <div className="mb-5">
                <Input onChange={onChangeSearchValue} className="bg-grey-50 border-none" placeholder={searchInputPlaceholder} />
            </div>}


            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        onCheckedChange={() => console.log("dfdf")
                        }
                        checked={false}
                    />
                ))}
            </div>

            {items.length > limit &&
                <div
                    onClick={() => setShowAll(!showAll)}
                    className="border-t border-t-neutral-100 py-5 mt-10 cursor-pointer"
                >
                    <button className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            }
        </div>
    );
};
