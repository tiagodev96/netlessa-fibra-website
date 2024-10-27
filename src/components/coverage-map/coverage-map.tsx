"use client";

import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ButtonComponent from "../globals/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "../ui/badge";

type Location = {
  id: number;
  local: string;
  bairro: string;
};

const locations: Location[] = [
  { id: 1, local: "Condomínio Adorato", bairro: "Cabula" },
  { id: 2, local: "Loteamento bela vista", bairro: "Tancredo Neves" },
  { id: 3, local: "Condomínio Arvoredo", bairro: "Tancredo Neves" },
  { id: 4, local: "Alto do Macaco", bairro: "Tancredo Neves" },
  { id: 5, local: "19BC", bairro: "Cabula" },
  { id: 6, local: "Centro Administrativo da Bahia", bairro: "CAB" },
];

export default function CoverageMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [pageCount, setPageCount] = useState(0);

  const availableBairros = Array.from(
    new Set(locations.map((loc) => loc.bairro))
  );

  const filteredLocations = locations.filter(
    (location) =>
      (location.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.bairro.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilters.length === 0 || activeFilters.includes(location.bairro))
  );

  useEffect(() => {
    setPageCount(Math.ceil(filteredLocations.length / itemsPerPage));
  }, [filteredLocations]);

  const paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const toggleFilter = (bairro: string) => {
    setActiveFilters((prev) =>
      prev.includes(bairro)
        ? prev.filter((f) => f !== bairro)
        : [...prev, bairro]
    );
  };

  return (
    <section className="section-container py-24 space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Locais e Bairros</h2>
        <ButtonComponent
          link="https://wa.me/5571986064654"
          icon={<FaWhatsapp size={24} />}
        >
          Contratar
        </ButtonComponent>
      </div>
      <p className="text-sm text-gray-500">
        Será realizada avaliação de viabilidade técnica para instalação. Temos o
        plano ideal para você!
      </p>
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Pesquisar"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Filtrar por Bairro</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {availableBairros.map((bairro) => (
                <div key={bairro} className="flex items-center space-x-2">
                  <Checkbox
                    id={bairro}
                    checked={activeFilters.includes(bairro)}
                    onCheckedChange={() => toggleFilter(bairro)}
                  />
                  <Label htmlFor={bairro}>{bairro}</Label>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="text-xs">
              {filter}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent"
                onClick={() => removeFilter(filter)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {filter} filter</span>
              </Button>
            </Badge>
          ))}
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Local</TableHead>
            <TableHead>Bairro</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedLocations.map((location) => (
            <TableRow key={location.id}>
              <TableCell>{location.local}</TableCell>
              <TableCell>{location.bairro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Mostrando {currentPage} de {pageCount}
        </p>
        <div className="flex items-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                {currentPage !== 1 && (
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                )}
              </PaginationItem>
              {[...Array(pageCount)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                {currentPage !== pageCount && (
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                    }
                  />
                )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
