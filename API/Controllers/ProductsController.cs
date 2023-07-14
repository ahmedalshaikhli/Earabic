using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPhotoService _photoService;
   
        private readonly ICJDropshippingService _cjDropshippingService;
        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper , IPhotoService photoService , ICJDropshippingService cjDropshippingService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _photoService = photoService;
             _cjDropshippingService = cjDropshippingService; 
        }


[HttpPost]
public async Task<ActionResult<ProductToReturnDto>> CreateProduct([FromForm] ProductDto productDto)
{
    // Map the productDto to product, without Photos
    var product = _mapper.Map<ProductDto, Product>(productDto);

    // Handle photos manually
    if (productDto.Photos != null)
    {
        product.Photos = new List<Photo>();

        foreach (var photoFile in productDto.Photos)
        {
            var photo = await _photoService.SaveToDiskAsync(photoFile);

            if (photo != null)
            {
                product.Photos.Add(photo);
            }
        }

        // Set the main photo
        var mainPhoto = product.Photos.FirstOrDefault();
        if (mainPhoto != null)
        {
            mainPhoto.IsMain = true;
            product.PictureUrl = mainPhoto.PictureUrl;
        }
    }

    // Save the product to the database or perform other necessary operations
    _unitOfWork.Repository<Product>().Add(product);
    var result = await _unitOfWork.Complete();

    if (result <= 0)
    {
        return BadRequest(new ApiResponse(400, "Problem creating product"));
    }

    // Map the created product to the return DTO
    var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);

    return Ok(productToReturn);
}
       /*  [Cached(600)] */
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts(
            [FromQuery]ProductSpecParams productParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            var countSpec = new ProductsWithFiltersForCountSpecification(productParams);

            var totalItems = await _unitOfWork.Repository<Product>().CountAsync(countSpec);

            var products = await _unitOfWork.Repository<Product>().ListAsync(spec);

            var data = _mapper
                .Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItems, data));
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _unitOfWork.Repository<ProductBrand>().ListAllAsync());
        }

        [Cached(1000)]
        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _unitOfWork.Repository<ProductType>().ListAllAsync());
        }


[HttpPut("{id}")]
/* [Authorize(Roles = "Admin")] */
public async Task<ActionResult<ProductToReturnDto>> UpdateProduct(int id, [FromForm] ProductDto productDto)
{
    var product = await _unitOfWork.Repository<Product>().GetByIdAsync(id);

    // Check if the product exists
    if (product == null)
    {
        return NotFound(new ApiResponse(404, "Product not found"));
    }

    // Assign the properties from the productDto to the existing product entity
    product.Name = productDto.Name;
    product.Description  = productDto.Description ;
    product.Price  = productDto.Price ;
    product.ProductTypeId  = productDto.ProductTypeId ;
    product.ProductBrandId  = productDto.ProductBrandId ;

     product.PictureUrl   = productDto.PictureUrl  ;

    
    // Assign other properties as needed...

    // Handle photos manually
    if (productDto.Photos != null && productDto.Photos.Count > 0)
    {
        // Delete existing photos
        foreach (var photo in product.Photos)
        {
            _photoService.DeleteFromDisk(photo);
        }

        product.Photos = new List<Photo>();

        // Save new photos
        foreach (var photoFile in productDto.Photos)
        {
            var photo = await _photoService.SaveToDiskAsync(photoFile);

            if (photo != null)
            {
                product.Photos.Add(photo);
            }
        }

        // Set the main photo
        var mainPhoto = product.Photos.FirstOrDefault();
        if (mainPhoto != null)
        {
            mainPhoto.IsMain = true;
            product.PictureUrl = mainPhoto.PictureUrl;
        }
    }

    _unitOfWork.Repository<Product>().Update(product);
    var result = await _unitOfWork.Complete();

    if (result <= 0)
    {
        return BadRequest(new ApiResponse(400, "Problem updating product"));
    }

    var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);

    return Ok(productToReturn);
}



        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _unitOfWork.Repository<Product>().GetByIdAsync(id);

            foreach (var photo in product.Photos)
            {
                if (photo.Id > 18)
                {
                    _photoService.DeleteFromDisk(photo);
                }
            }
            
            _unitOfWork.Repository<Product>().Delete(product);

            var result = await _unitOfWork.Complete();
            
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting product"));

            return Ok();
        }
        [HttpDelete("photos/{photoId}")]
        public async Task<ActionResult> DeletePhoto(int photoId)
{
    var photo = await _unitOfWork.Repository<Photo>().GetByIdAsync(photoId);

    if (photo == null)
    {
        return NotFound(new ApiResponse(404, "Photo not found"));
    }

    _photoService.DeleteFromDisk(photo);
    _unitOfWork.Repository<Photo>().Delete(photo);

    var result = await _unitOfWork.Complete();

    if (result <= 0)
    {
        return BadRequest(new ApiResponse(400, "Problem deleting photo"));
    }

    return Ok();
} 
 
    }

    
}