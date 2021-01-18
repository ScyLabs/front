<?php

namespace App\Controller;

use ScyLabs\NeptuneBundle\Services\NeptuneFrontVars;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/{_locale}/{appName}/", name="app",requirements={"appName"="(app|shop)"})
     */
    public function index(NeptuneFrontVars $neptuneFrontVars, Request $request,$appName): Response
    {
        return $this->render('app/index.html.twig', array_merge($neptuneFrontVars->getVars($request),['appName' => $appName]));
    }
}
