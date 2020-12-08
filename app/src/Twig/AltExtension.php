<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use ScyLabs\NeptuneBundle\AbstractEntity\AbstractFileLink;
use ScyLabs\NeptuneBundle\Entity\Photo;
use ScyLabs\NeptuneBundle\Repository\InfosRepository;

class AltExtension extends AbstractExtension {
    
    private $repository;
    public function __construct(InfosRepository $repository)
    {
        $this->repository = $repository;
    }
    public function getFunctions()
    {
        return array(
            new TwigFunction('getAlt',array($this,'getAlt'))
        );
    }
    public function getAlt(Photo $link,string $locale) : string {
        $infos = $this->repository->findOneBy([],['id'=>'ASC']);
        $alt = $link->getDetail($locale)->getTitle() ?? 'Location corse I pini plage de Palombaggia';
        return $alt;
    }
}
