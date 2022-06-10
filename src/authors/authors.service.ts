import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateAuthorDto } from './dto/create-author.dto'
import { UpdateAuthorDto } from './dto/update-author.dto'

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) { }

  create(data: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data,
    })
  }

  findAll() {
    return this.prisma.author.findMany()
  }

  findOne(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where,
    })
  }

  update(where: Prisma.AuthorWhereUniqueInput, data: Prisma.AuthorUpdateInput) {
    return this.prisma.author.update({
      data,
      where,
    })
  }

  remove(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where,
    })
  }
}
